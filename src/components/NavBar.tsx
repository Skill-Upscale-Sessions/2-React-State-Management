import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" }}>
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
    </nav>
  );
};

export default NavBar;
