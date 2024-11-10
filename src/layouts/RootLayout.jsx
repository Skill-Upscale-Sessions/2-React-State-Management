import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { theme } from "../theme";
export default function RootLayout() {
  const style = ({ isActive }) => ({
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
    border: "1px solid blue",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: isActive ? "orange" : "white",
  });

  return (
    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      paddingTop: "10px",
      minHeight: "100vh",
    }}>
      <header>
        <nav className="justify-self-end space-x-10 mr-8 mt-4">
          <NavLink to="/" end style={style}>
            Home
          </NavLink>
          <NavLink to="/movies" style={style}>
            Movies
          </NavLink>
          <NavLink to="/series" style={style}>
            Series
          </NavLink>
          <NavLink to="/books" style={style}>
            Books
          </NavLink>
        </nav>
      </header>
      <main className="content" id="full-content">
        <Outlet />
      </main>
    </Box>
  );
}
