import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveProfile: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export const { saveToken, saveProfile } = UserSlice.actions;

export default UserSlice.reducer;
