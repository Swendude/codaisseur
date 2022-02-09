import { combineReducers } from "redux";

import postsReducer from "./postsFeed/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
});

export default reducer;