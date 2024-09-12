import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-404.jsx";
import Workspace from "./pages/workspace.jsx";
import Register from "./pages/register.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
    path: "/workspace",
    element: <Workspace></Workspace>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
    {/* <App /> */}
  </StrictMode>
);
