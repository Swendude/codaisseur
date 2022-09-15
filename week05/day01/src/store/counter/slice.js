import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCount: 0,
  editing: false
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
    change: (state, action) => {
      console.log(action);
      state.currentCount = state.currentCount + action.payload;
    },
    reset: (state) => {
      // state.currentCount = 0;
      state = initialState;
    }
  }
});

export const { increase, decrease, reset, change } = counterSlice.actions;

export default counterSlice.reducer;
