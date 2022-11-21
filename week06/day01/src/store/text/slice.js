import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

export const textSlice = createSlice({
  name: "text",
  initialState: initialState,
  reducers: {
    // addCow: (state) => {
    //   state.value = state.value + "🐄";
    // },
    // addPig: (state) => {
    //   state.value = state.value + "🐖";
    // },
    addAnimal: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      return initialState;
    }
  }
});

export const { reset, addAnimal } = textSlice.actions;

export default textSlice.reducer;
