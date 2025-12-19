import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
const appStore = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default appStore;
