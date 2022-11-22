import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: null
};

export const pokeSlice = createSlice({
  name: "Pokemons",
  initialState: initialState,
  reducers: {
    recievePokemon: (state, action) => {
      state.pokemons = action.payload;
    }
  }
});

export const { recievePokemon } = pokeSlice.actions;

export default pokeSlice.reducer;
