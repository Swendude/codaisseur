import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1000,
  loggedIn: false
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState: initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    change: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    }
  }
});

export const { increase, decrease, change } = amazonSlice.actions;
export default amazonSlice.reducer;
