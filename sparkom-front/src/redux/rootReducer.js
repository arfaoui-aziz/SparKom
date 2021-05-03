import { combineReducers } from "redux";
import auth from "../store/slices/auth";
import { reducer as reducerForm } from "redux-form";
const rootReducer = combineReducers({
  
  form: reducerForm,
  auth,
  
});

export default rootReducer;