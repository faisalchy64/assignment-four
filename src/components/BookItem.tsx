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

export default function BookItem() {
  return (
    <TableRow>
      <TableCell>The Theory of Everything</TableCell>
      <TableCell>Stephen Hawking</TableCell>
      <TableCell>SCIENCE</TableCell>
      <TableCell>9780553380163</TableCell>
      <TableCell>2</TableCell>
      <TableCell>True</TableCell>
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
              <Link to="/books/1">View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/edit-book/1">Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/borrow/1">Borrow</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
