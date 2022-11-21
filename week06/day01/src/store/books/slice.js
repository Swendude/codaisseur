import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
  books: []
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addGenre: (state, action) => {
      state.genres = [...state.genres, action.payload];
    },
    deleteGenre: (state, action) => {
      state.genres = state.genres.filter((g) => g !== action.payload);
    },
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    toggleRead: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.title === action.payload) {
          return { ...book, read: !book.read };
        } else {
          return book;
        }
      });
    }
  }
});

export const { addGenre, deleteGenre, addBook, toggleRead } =
  booksSlice.actions;

export default booksSlice.reducer;
