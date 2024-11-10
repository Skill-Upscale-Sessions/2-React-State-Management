import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Router,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import routes from "./routes";
import Home from "./scenes/pages/home";
import MoviesPage from "./scenes/pages/movies";
import NotFound from "./scenes/pages/notFound";
import SeriesLayout from "./layouts/SeriesLayout";
import BooksLayout from "./layouts/BooksLayout";
import Books, { booksLoader } from "./scenes/pages/books/books";
import BookItem, { bookItemLoader } from "./scenes/pages/books/bookItem";
import BookError from "./scenes/pages/books/bookError";
import withAuth from "./HOC/withAuth";
import RegistrationForm from "./PROPS/RegistrationForm";
import { UserProvider } from "./CONTEXT/userContext";

const App = () => {
  // const AuthBooks = withAuth(BooksLayout);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Creating Layout */}
        <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
          {/* {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))} */}
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />

          {/* Nested Routes */}
          <Route path="series" element={<SeriesLayout />}>
            <Route path="tv" element={<h1>TV</h1>} />
            <Route path="anime" element={<h1>Anime</h1>} />
          </Route>

          {/* Loader function in React Router */}
          <Route path="books" element={<BooksLayout />}>
            <Route index element={<Books />} loader={booksLoader} />
            {/* loader={booksLoader} */}
            <Route path=":id" element={<BookItem />} loader={bookItemLoader} errorElement={<BookError/>} />
          </Route>
        </Route>
        <Route path="register" element={<RegistrationForm />} />
      </>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <BrowserRouter>
        <header>
          <nav className="justify-self-end space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </BrowserRouter> */}
        <UserProvider>
      <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
