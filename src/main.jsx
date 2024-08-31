import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <div>register</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
    {/* <App /> */}
  </StrictMode>
);
