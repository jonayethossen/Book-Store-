import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
export default router;
