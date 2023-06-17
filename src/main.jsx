import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from 'react-helmet-async';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
