import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Contact, { contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { getMoviesData } from "./api/getMoviesData";
import  MovieDetails  from "./components/UI/MovieDetails"; // Movie details route
import { getMovieDetails } from "./api/getMovieDetails";
// import { Blog } from "./pages/Blog"; // Assuming you have a Blog component
// import { NoPage } from "./pages/NoPage"; // Assuming NoPage is your 404 component

// Create the router with routes and loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />, // This will handle errors
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/movies",
        element: <Movie />,
        loader:getMoviesData
        },
      {
        path: "/contact",
        element: <Contact />,
        action:contactData
      },
      {
        path: "/movies/:movieID",
        element: <MovieDetails/>,
        loader:getMovieDetails
      },
      // {
      //   path: "/blog/:id",
      //   element: <Blog />,
      // },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
    // element: <NoPage />, // Assuming NoPage is your custom 404 page
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
