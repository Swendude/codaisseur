import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = state.value + action.payload;
    },

    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change, setValue } = counterSlice.actions;

export default counterSlice.reducer;
