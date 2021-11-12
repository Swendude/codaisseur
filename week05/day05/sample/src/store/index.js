// src/store/index.js
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import postReducer from "./posts/reducer";
import ReduxThunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__() :
    x => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(
    combineReducers({
        post: postReducer,
    }),
    enhancer
);

export default store;