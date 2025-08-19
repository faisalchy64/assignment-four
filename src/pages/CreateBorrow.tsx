import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate, useParams } from "react-router";
import {
  useCreateBorrowMutation,
  useGetBookQuery,
} from "@/redux/features/api/apiSlice";
import { toast } from "sonner";

export default function CreateBorrow() {
  const { bookId } = useParams();
  const { data: book } = useGetBookQuery(bookId ?? "");
  const [createBorrow, { isLoading }] = useCreateBorrowMutation();

  const formSchema = z.object({
    quantity: z
      .number({ error: "The quantity should be a positive number." })
      .gt(0, { error: "The quantity must be greater than 0." })
      .lte(book?.data.copies ?? 1, {
        error: `The quantity must be less than or equal to ${book?.data.copies}.`,
      }),
    dueDate: z.date({ error: "Due date is required." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const navigate = useNavigate();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const res = await createBorrow({ ...data, book: bookId ?? "" });

    if (res.error) {
      toast.error("Something went wrong.");
      form.reset();
    } else {
      toast.success(res.data?.message);
      navigate("/borrow-summary");
    }
  }

  return (
    <main className="main">
      <h3 className="text-2xl">Borrow Book</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-5 my-2.5 border rounded-md"
        >
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter book quantity"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        isNaN(parseInt(e.target.value))
                          ? 0
                          : parseInt(e.target.value)
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="size-4 ml-auto opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      captionLayout="dropdown"
                      className="w-full"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
