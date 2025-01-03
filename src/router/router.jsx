import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;