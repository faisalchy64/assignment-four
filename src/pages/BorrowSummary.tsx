import BorrowItem from "@/components/BorrowItem";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BorrowSummary() {
  return (
    <main className="w-4/5 mx-auto">
      <h3 className="text-2xl">Books Borrow Summary</h3>

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
            <BorrowItem />
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
