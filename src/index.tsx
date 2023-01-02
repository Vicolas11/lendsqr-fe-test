import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import PageNotFound from "./pages/PageNotFound";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/Login";
import "./styles/index.css";
import React from "react";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
