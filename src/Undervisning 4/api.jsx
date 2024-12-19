import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=50");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
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
    <div>
      <h1>Peoplez:</h1>
      <ul>
        {data.results.map((person) => {
          return (
            <li key={person.id.value}>
              {`${person.name.title} ${person.name.first} ${person.name.last}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
