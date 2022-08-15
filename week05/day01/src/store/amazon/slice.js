import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1000,
  loggedIn: false,
  bla: "sheep"
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
    badIdea: (state) => {
      state.bla = "Cow";
    }
  }
});

export const { increase, decrease } = amazonSlice.actions;
export default amazonSlice.reducer;
