import UserCard from "./UserCard.jsx";
import { useContext } from "react";
import { AppContext } from "./App.jsx";

export default function UserList() {
  const { data } = useContext(AppContext);
  return (
    <ul>
      {data.map((person) => (
        <UserCard key={person.id.value} person={person} />
      ))}
    </ul>
  );
}
