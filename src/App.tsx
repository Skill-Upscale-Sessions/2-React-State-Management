import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactHooks from "./components/common/ReactHooks";
import About from "./components/common/About";
import { Route, Routes } from "react-router-dom";
import Users from "./components/common/Users";
import UsersWithRedux from "./components/common/UsersWithRedux";
import NavBar from "./components/common/NavBar";
import Counter from "./components/common/Counter";
// const LazyAbout = React.lazy(() => import("./components/common/About"));

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: string) => {},
});

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
            path="/about"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </React.Suspense>
            }
          /> */}
          <Route path="/users" element={<Users />} />
          <Route path="/redux" element={<UsersWithRedux />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
