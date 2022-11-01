import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import bikeReducer from "./bikes/slice";
import pokeReducer from "./pokemons/slice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    bikes: bikeReducer,
    pokemons: pokeReducer
  }
});

export default store;
