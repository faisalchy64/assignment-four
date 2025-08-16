import { createBrowserRouter } from "react-router";
import Main from "./layouts/Main";
import Books from "./pages/Books";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import CreateBorrow from "./pages/CreateBorrow";
import BorrowSummary from "./pages/BorrowSummary";

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
      {
        path: "/borrow/:bookId",
        element: <CreateBorrow />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404! Page Not Found</h1>,
  },
]);

export default router;
