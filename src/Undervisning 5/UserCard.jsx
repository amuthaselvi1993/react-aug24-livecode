import { useContext } from "react";
import { AppContext } from "./App.jsx";

export default function UserCard({ person }) {
  const { setFriends } = useContext(AppContext);
  return (
    <li onClick={() => setFriends((prev) => [...prev, person])}>
      {`${person.name.title} ${person.name.first} ${person.name.last}`}
    </li>
  );
}
