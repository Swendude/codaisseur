import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./text/slice";
import booksSlice from "./books/slice";
import pizzaSlice from "./pizzas/slice";
import pokeSlice from "./pokemons/slice";
const store = configureStore({
  reducer: {
    text: textSlice,
    books: booksSlice,
    pizzas: pizzaSlice,
    pokemons: pokeSlice
  }
});

export default store;
