import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import bikeReducer from "./bikes/slice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    bikes: bikeReducer
  }
});

export default store;
