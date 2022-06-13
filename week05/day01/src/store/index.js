import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/slice";
import lampSlice from "./lamp/slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    lamp: lampSlice
  }
});

export default store;
