import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";

export default combineReducers({
  auth,
});
