import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./text/slice";

const store = configureStore({
  reducer: {
    text: textSlice
  }
});

export default store;
