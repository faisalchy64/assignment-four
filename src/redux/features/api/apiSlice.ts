import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "@/types";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Books"],
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
  }),
});

export default apiSlice;
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = apiSlice;
