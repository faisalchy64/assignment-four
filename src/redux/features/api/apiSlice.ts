import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook, IBorrow } from "@/types";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-three-rust.vercel.app/api",
  }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    getBooks: builder.query<
      { success: boolean; message: string; data: IBook[] },
      null
    >({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBook: builder.query<
      {
        success: boolean;
        message: string;
        data: IBook;
      },
      string
    >({ query: (id) => `/books/${id}` }),
    createBook: builder.mutation<
      { success: boolean; message: string; data: IBook },
      Omit<IBook, "_id" | "createdAt" | "updatedAt">
    >({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<
      { success: boolean; message: string; data: IBook },
      { _id: string; data: Omit<IBook, "_id" | "createdAt" | "updatedAt"> }
    >({
      query: ({ _id, data }) => ({
        url: `/books/${_id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<
      {
        success: boolean;
        message: string;
        data: null;
      },
      string
    >({
      query: (_id) => ({ url: `/books/${_id}`, method: "DELETE" }),
      invalidatesTags: ["Books"],
    }),
    createBorrow: builder.mutation<
      {
        success: boolean;
        message: string;
        data: IBorrow;
      },
      Omit<IBorrow, "_id" | "createdAt" | "updatedAt">
    >({
      query: (data) => ({ url: "borrow", method: "POST", body: data }),
      invalidatesTags: ["Borrows"],
    }),
    getBorrowBooks: builder.query<
      {
        success: boolean;
        message: string;
        data: {
          book: { title: string; isbn: string };
          totalQuantity: number;
        }[];
      },
      null
    >({
      query: () => "/borrow",
      providesTags: ["Borrows"],
    }),
  }),
});

export default apiSlice;
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBorrowMutation,
  useGetBorrowBooksQuery,
} = apiSlice;
