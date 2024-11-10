import React, { createContext, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ReactHooks from "./components/ReactHooks";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
// const LazyAbout = React.lazy(() => import("./components/About"));
import Users from "./components/Users";
import UsersWithRedux from "./components/UsersWithRedux";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: string) => {},
});

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
        to="/users-redux"
        style={{ marginLeft: "1rem", color: "#fff", textDecoration: "none" }}
      >
        Redux
      </Link>
    </nav>
  );
};

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ReactHooks />} />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/lazy"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </React.Suspense>
            }
          /> */}
          <Route path="/users" element={<Users />} />
          <Route path="/users-redux" element={<UsersWithRedux />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
