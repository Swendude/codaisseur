import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: ["post 1", "post 2", "post 3", "post 4", "post 5"]
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {} = postSlice.actions;

export default postSlice.reducer;
