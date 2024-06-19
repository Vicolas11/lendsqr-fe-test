import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage />, errorElement: <ErrorPage /> },
  {
    path: "dashboard",
    children: [
      {
        path: "",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
