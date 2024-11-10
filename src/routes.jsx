import Home from "./scenes/pages/home";
import MoviesPage from "./scenes/pages/movies";

const routes = [
    {
        id: 1,
        path: "/home",
        element: <Home />,
    },
    {
        id: 2,
        path: "/movies",
        element: <MoviesPage />,
    },
];

export default routes;