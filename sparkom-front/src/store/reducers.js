import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";
import resume from "./slices/resume";
export default combineReducers({
  auth,
  profile,
  resume,
});
