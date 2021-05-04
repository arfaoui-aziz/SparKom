import { combineReducers } from "redux";
import auth from "../store/slices/auth";
import { reducer as reducerForm } from "redux-form";
import postReducer from "./reducers/post/postReducer";
const rootReducer = combineReducers({
  
  form: reducerForm,
  auth,
  post: postReducer,

  
});

export default rootReducer;