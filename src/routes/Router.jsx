import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import Layouts from "../Layouts";
import CataloguePage from "../pages/CataloguePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/registration",
        Component: RegistrationPage,
      },
      {
        path: "/catalogue",
        Component: CataloguePage,
      },
    ],
  },
]);
export default router;
