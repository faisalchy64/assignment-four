import { Link } from "react-router";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="py-3.5 border-b">
      <div className="w-4/5 flex justify-between items-center mx-auto">
        <Link to="/" className="text-2xl font-semibold">
          LMS
        </Link>

        <div className="hidden md:flex items-center gap-2.5 text-xs">
          <Link to="/books">All Books</Link>
          <Link to="/add-book">Add Book</Link>
          <Link to="/borrow-summary">Borrow Summary</Link>

          <ModeToggle />
        </div>

        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="flex justify-between items-center">
                <span>Menu</span>
                <ModeToggle />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/books">All Books</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/add-book">Add Book</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/borrow-summary">Borrow Summary</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
