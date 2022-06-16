import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const { storeToken } = authSlice.actions;

export default authSlice.reducer;
