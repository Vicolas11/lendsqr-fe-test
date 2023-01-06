import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import PageNotFound from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import LoginPage from "./pages/Login";
import "./styles/index.css";
import React from "react";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
