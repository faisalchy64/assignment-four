import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import BookItem from "@/components/BookItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/features/api/apiSlice";

export default function Books() {
  const { isLoading, data: books, isError } = useGetBooksQuery(null);

  return (
    <main className="w-4/5 py-10 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">All Books</h3>
        <Link to="/create-book">
          <Button>Add Book</Button>
        </Link>
      </div>

      {isLoading && (
        <p className="text-sm text-green-500 my-2.5">
          Books data are being fetched…
        </p>
      )}

      {isError && (
        <p className="text-sm text-rose-500 my-2.5">Something went wrong.</p>
      )}

      {books?.data && (
        <div className="border rounded-md my-2.5">
          <Table>
            <TableCaption>A list of your recent books.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Copies</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {books?.data.map((book) => (
                <BookItem key={book._id} book={book} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </main>
  );
}
