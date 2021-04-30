import { combineReducers } from "redux";
import userReducer from "./reducers/user/userReducer";
import postReducer from "./reducers/post/postReducer";
import { reducer as reducerForm } from "redux-form";
const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  form: reducerForm,
});

export default rootReducer;