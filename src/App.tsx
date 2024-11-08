import React, { createContext, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ReactHooks from "./components/ReactHooks";
import LazyLoading from "./components/LazyLoading";
import { Route, Routes } from "react-router-dom";
// const LazyAbout = React.lazy(() => import("./components/LazyLoading"));

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
      <Link to="/lazy" style={{ color: "#fff", textDecoration: "none" }}>
        Lazy Loading
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
          <Route path="/lazy" element={<LazyLoading />} />
           {/* <Route
            path="/lazy"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </React.Suspense>
            }
          /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
