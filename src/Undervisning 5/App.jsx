// useContext

import { useState, useEffect, createContext } from "react";
import UserList from "./UserList.jsx";
import FriendList from "./FriendList.jsx";

// Lage en variabel som holder contexten.
export const AppContext = createContext();

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=50");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <AppContext.Provider value={{ data, friends, setFriends }}>
      <div>
        <h1>Friendz</h1>
        <FriendList friends={friends} />
        <h1>Peoplez:</h1>
        <UserList data={data} setFriends={setFriends} />
      </div>
    </AppContext.Provider>
  );
}
