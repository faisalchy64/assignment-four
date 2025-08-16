import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "@/types";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<
      { success: boolean; message: string; data: IBook[] },
      null
    >({
      query: () => "/books",
    }),
    getBook: builder.query<
      { success: boolean; message: string; data: IBook },
      string
    >({ query: (id) => `/books/${id}` }),
  }),
});

export default apiSlice;
export const { useGetBooksQuery, useGetBookQuery } = apiSlice;
