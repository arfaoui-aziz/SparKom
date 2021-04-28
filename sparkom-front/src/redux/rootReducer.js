import { combineReducers } from "redux";
import userReducer from "./reducers/user/userReducer";
import postReducer from "./reducers/post/postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;