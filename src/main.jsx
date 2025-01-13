import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeView from "./Views/HomeView.jsx";
import AboutUsView from "./Views/AboutUsView.jsx";
import NotFoundView from "./Views/NotFoundView.jsx";
import UsersView from "./Views/UsersView.jsx";
import UserView from "./Views/UserView.jsx";
import HeaderMenu from "./Views/HeaderMenu.jsx";

// SPA - Single Page Application
// Routing.
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderMenu />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "/about",
        element: <AboutUsView />,
      },
      {
        path: "*",
        element: <NotFoundView />,
      },
      {
        path: "/users",
        element: <UsersView />,
      },
      {
        path: "/users/:id",
        element: <UserView />,
      },
    ],
  },
]);
//http://localhost:5173/about
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
