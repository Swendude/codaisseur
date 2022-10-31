import { createSlice } from "@reduxjs/toolkit";

// Garden
const initialState = { value: 0 };

// Gnome
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      state.value = state.value + 1;
    },
    decrease: (state) => {
      state.value = state.value - 1;
    },
    set: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increase, decrease, reset, set } = counterSlice.actions;
export default counterSlice.reducer;
