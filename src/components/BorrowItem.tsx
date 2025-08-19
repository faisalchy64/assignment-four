import { TableRow, TableCell } from "@/components/ui/table";

export default function BorrowItem({
  borrow,
}: {
  borrow: {
    book: { title: string; isbn: string };
    totalQuantity: number;
  };
}) {
  return (
    <TableRow>
      <TableCell>{borrow.book.title}</TableCell>
      <TableCell>{borrow.book.isbn}</TableCell>
      <TableCell>{borrow.totalQuantity}</TableCell>
    </TableRow>
  );
}
