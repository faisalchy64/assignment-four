import type { IBook } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { book: IBook | null } = {
  book: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<IBook>) => {
      state.book = action.payload;
    },
    reset: (state) => {
      state.book = null;
    },
  },
});

export default bookSlice.reducer;
export const { update, reset } = bookSlice.actions;
