import { createBrowserRouter } from "react-router";
import Main from "./layouts/Main";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404! Page Not Found</h1>,
  },
]);

export default router;
