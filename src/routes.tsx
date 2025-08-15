import { createBrowserRouter } from "react-router";
import Main from "./layouts/Main";
import Books from "./pages/Books";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";

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
      {
        path: "/books/:id",
        element: <Book />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404! Page Not Found</h1>,
  },
]);

export default router;
