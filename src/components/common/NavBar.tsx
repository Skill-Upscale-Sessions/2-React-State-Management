import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";

const NavBar = () => {
  const { number } = useSelector((state: RootState) => state.counter);
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

      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "1.25rem",
          fontWeight: "bold",
        }}
      >
        State Value : {number}
      </div>
    </nav>
  );
};

export default NavBar;
