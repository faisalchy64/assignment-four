import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/app/store";
import type { IBook } from "@/types";
import { useUpdateBookMutation } from "@/redux/features/api/apiSlice";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

export default function UpdateBook() {
  const formSchema = z.object({
    title: z
      .string()
      .min(3, { error: "The title should contain at least 3 characters." }),
    author: z
      .string()
      .min(3, { error: "The author should contain at least 3 characters." }),
    genre: z
      .string()
      .min(3, { error: "The genre should contain at least 3 characters." }),
    isbn: z
      .string()
      .min(3, { error: "The isbn should contain at least 3 characters." }),
    description: z.string().min(3, {
      error: "The description should contain at least 3 characters.",
    }),
    copies: z
      .number({ error: "The copies should be a positive number." })
      .gte(0, { error: "The copies should be greater than or equal to 0." }),
  });

  const { book }: { book: IBook | null } = useSelector(
    (state: RootState) => state.book
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book?.title ?? "",
      author: book?.author ?? "",
      genre: book?.genre ?? "",
      isbn: book?.isbn ?? "",
      description: book?.description ?? "",
      copies: book?.copies ?? 0,
    },
  });

  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const res = await updateBook({
      _id: id,
      data: {
        ...data,
        genre: data.genre as IBook["genre"],
      },
    });

    if (res.error) {
      toast.error("Something went wrong.");
      form.reset();
    } else {
      toast.success(res.data.message);
      navigate("/");
    }
  }

  return (
    <main className="main">
      <h3 className="text-2xl">Update Book's Details</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 p-5 my-2.5 border rounded-md"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter book title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter book author name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter book isbn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter book description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter book copies"
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

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </main>
  );
}
