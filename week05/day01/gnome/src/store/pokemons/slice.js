import { createSlice } from "@reduxjs/toolkit";

// Garden
const initialState = {
  pokeList: []
};

// Gnome
export const pokeSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {
    receivePokemon: (state, action) => {
      state.pokeList = action.payload;
    }
  }
});

export const { receivePokemon } = pokeSlice.actions;
export default pokeSlice.reducer;
