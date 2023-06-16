import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Blog from "../pages/Shared/Blog/Blog";
import SignUp from "../pages/SignUp/SignUp";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/alltoys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoys/${params.id}`),
      },

      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
