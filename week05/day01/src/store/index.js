// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./amazon/slice";
const store = configureStore({
  reducer: {
    amazon: amazonReducer
  }
});

export default store;
