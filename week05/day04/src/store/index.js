import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./posts/slice";
import authReducer from "./auth/slice";
const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer
  }
});

export default store;
