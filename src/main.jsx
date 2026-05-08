import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layouts from "./Layouts";
import { createBrowserRouter, RouterProvider } from "react-router";
import Hero from "./components/Hero";
import router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
