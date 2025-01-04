import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../layout/MainlayOut";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/projects/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: () => fetch("/project.json")
        }
      ]
    },
  ]);

export default router;