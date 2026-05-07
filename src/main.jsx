import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layouts from "./Layouts";
import { createBrowserRouter, RouterProvider } from "react-router";
import Hero from "./components/Hero";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/hero",
        Component: Hero,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
