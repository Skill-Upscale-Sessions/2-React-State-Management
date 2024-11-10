import { Link } from "react-router-dom";
import NavComponent from "./NavComponent";

const NavBar = () => {
  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#333",
        color: "#fff",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{ marginRight: "1rem", color: "#fff", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </Link>
        <Link
          to="/counter"
          style={{ marginLeft: "1rem", color: "#fff", textDecoration: "none" }}
        >
          Counter
        </Link>
        <Link
          to="/users"
          style={{ marginLeft: "1rem", color: "#fff", textDecoration: "none" }}
        >
          Users
        </Link>
        <Link
          to="/redux"
          style={{ marginLeft: "1rem", color: "#fff", textDecoration: "none" }}
        >
          Redux
        </Link>
      </div>

      <NavComponent />
    </nav>
  );
};

export default NavBar;
