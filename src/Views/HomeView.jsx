import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <div>
      <h1>Velkommen til siden vår! 😅</h1>
      <Link to="/about">Om Oss</Link>
    </div>
  );
}
