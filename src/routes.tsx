import { createBrowserRouter } from "react-router";
import Counter from "./components/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "*",
    element: <h1>404! Page Not Found</h1>,
  },
]);

export default router;
