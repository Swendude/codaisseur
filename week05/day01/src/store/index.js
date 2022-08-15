// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./amazon/slice";
import userReducer from "./user/slice";
const store = configureStore({
  reducer: {
    amazon: amazonReducer,
    user: userReducer
  }
});

export default store;
