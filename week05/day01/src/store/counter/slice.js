import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, username: "swen" };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      console.log("Got the increase action");
      state.value = state.value + 1;
    },
    decrease: (state) => {
      console.log("Got the decrease action");
      state.value = state.value - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
