import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
export default router;
