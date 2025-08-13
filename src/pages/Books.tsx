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

export default function Books() {
  return (
    <main className="w-4/5 mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">All Books</h3>
        <Link to="/create-book">
          <Button>Add Book</Button>
        </Link>
      </div>

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
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
