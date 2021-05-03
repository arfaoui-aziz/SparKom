import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import postsSlice from "./slices/postsSlice";
export default combineReducers({
  auth,
  postsSlice,
});
