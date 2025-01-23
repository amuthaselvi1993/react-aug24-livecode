import { Outlet, Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Header.</h1>
        <Link to="/home">Hjem</Link>
        <Link to="/about">Om Oss</Link>
        <Link to="/users">Brukere</Link>
      </div>
      <Outlet />
    </>
  );
}
