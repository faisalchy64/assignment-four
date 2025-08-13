import { createBrowserRouter } from "react-router";
import Main from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [],
  },
  {
    path: "*",
    element: <h1>404! Page Not Found</h1>,
  },
]);

export default router;
