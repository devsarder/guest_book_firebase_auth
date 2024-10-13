// src/App.js
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Reset } from "../auth/Reset";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import Layout from "./Layout";

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
    ],
  },
]);

export default router;
