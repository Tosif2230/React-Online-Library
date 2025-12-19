import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    items: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.items = action.payload;
    },
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setBooks, addBook } = bookSlice.actions;

export default bookSlice.reducer;
