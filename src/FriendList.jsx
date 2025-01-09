import { useContext } from "react";
import { AppContext } from "./App.jsx";

export default function FriendList() {
  const { friends } = useContext(AppContext);
  return (
    <>
      {friends.map((person) => (
        <h3 key={person.id.value}>{person.name.first}</h3>
      ))}
    </>
  );
}
