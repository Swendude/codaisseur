import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCount: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      state.currentCount = state.currentCount + 1;
    },
    decrease: (state) => {
      state.currentCount = state.currentCount - 1;
    },
    reset: (state) => {
      state.currentCount = 0;
    }
  }
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
