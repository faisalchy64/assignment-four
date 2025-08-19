import BorrowItem from "@/components/BorrowItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowBooksQuery } from "@/redux/features/api/apiSlice";

export default function BorrowSummary() {
  const { isLoading, data: borrows, isError } = useGetBorrowBooksQuery(null);

  return (
    <main className="main">
      <h3 className="text-2xl">Books Borrow Summary</h3>

      {isLoading && (
        <p className="text-sm text-green-500 my-2.5">
          Borrow books data are being fetched…
        </p>
      )}

      {isError && (
        <p className="text-sm text-rose-500 my-2.5">Something went wrong.</p>
      )}

      {borrows?.data && (
        <div className="border rounded-md my-2.5">
          <Table>
            <TableCaption>A list of your recent borrowed books.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Total Quantity</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {borrows?.data.map((borrow) => (
                <BorrowItem key={borrow.book.isbn} borrow={borrow} />
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </main>
  );
}
