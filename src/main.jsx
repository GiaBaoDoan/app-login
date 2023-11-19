import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register/Register";
import LoginForm from "./LoginFrom/loginForm";
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <LoginForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
