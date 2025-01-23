import { useParams } from "react-router-dom";

export default function UserView() {
  const { id } = useParams();
  return <h1>Enkel brukerside for {id}</h1>;
}
