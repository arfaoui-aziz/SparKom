import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";

export default combineReducers({
  auth,
  profile,
});
