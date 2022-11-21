import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./text/slice";
import booksSlice from "./books/slice";

const store = configureStore({
  reducer: {
    text: textSlice,
    books: booksSlice
  }
});

export default store;
