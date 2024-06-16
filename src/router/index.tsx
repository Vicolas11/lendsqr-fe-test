import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import PrivateRouter from "./privateRouter";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage />, errorElement: <ErrorPage /> },
  {
    path: "dashboard",
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <div></div>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
