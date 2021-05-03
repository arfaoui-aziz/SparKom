import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import { reducer as reducerForm } from "redux-form";
export default combineReducers({
  auth,
  form: reducerForm,
});
