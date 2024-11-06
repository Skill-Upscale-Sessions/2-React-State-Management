import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import routes from "./routes";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Route>
      </>
    )
  );

  return (
    <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">React Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter />
          <TodoList />
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
