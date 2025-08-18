import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { IBook } from "@/types";
import type { AppDispatch } from "@/redux/app/store";
import { update } from "@/redux/features/book/bookSlice";
import { useDeleteBookMutation } from "@/redux/features/api/apiSlice";
import { toast } from "sonner";

export default function BookItem({ book }: { book: IBook }) {
  const dispatch = useDispatch<AppDispatch>();
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleDelete = async () => {
    const res = await deleteBook(book._id);

    if (res.error) {
      toast.error("Something went wrong.");
    } else {
      toast.success(res.data?.message);
    }
  };

  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.genre}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>{book.copies}</TableCell>
      <TableCell>{book.available ? "Available" : "Unavailable"}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <span>Actions</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/books/${book._id}`} className="w-full">
                View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to={`/edit-book/${book._id}`}
                className="w-full"
                onClick={() => dispatch(update(book))}
              >
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={`/borrow/${book._id}`} className="w-full">
                Borrow
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AlertDialog>
                <AlertDialogTrigger
                  className="w-full text-start"
                  disabled={isLoading}
                >
                  Delete
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your book and remove your book data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
