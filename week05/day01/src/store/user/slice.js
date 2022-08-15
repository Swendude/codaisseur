import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  username: null
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    tokenRecieved: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
