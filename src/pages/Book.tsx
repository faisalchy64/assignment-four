import { Badge } from "@/components/ui/badge";
import { useGetBookQuery } from "@/redux/features/api/apiSlice";
import { useParams } from "react-router";

export default function Book() {
  const { id } = useParams();
  const { isLoading, data: book, isError } = useGetBookQuery(id ?? "");

  return (
    <main className="w-4/5 py-10 mx-auto">
      {isLoading && (
        <p className="text-sm text-green-500 my-2.5">
          Book data is being fetched…
        </p>
      )}

      {isError && (
        <p className="text-sm text-rose-500 my-2.5">Something went wrong.</p>
      )}

      {book?.data && (
        <div>
          <h3 className="text-2xl">{book?.data.title}</h3>
          <div className="flex items-center gap-3.5 my-1.5">
            <span className="text-sm">{book?.data.author},</span>
            <Badge>{book?.data.genre}</Badge>
          </div>

          <div className="py-5">
            <h4 className="font-semibold">Description</h4>
            <p className="text-sm text-gray-400">{book?.data.description}</p>
          </div>

          <div className="flex items-center gap-3.5">
            <p className="text-sm">ISBN: {book?.data.isbn},</p>
            <p className="text-sm">Copies Available: {book?.data.copies}</p>
          </div>
        </div>
      )}
    </main>
  );
}
