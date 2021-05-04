import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import jobs from "./slices/jobs";
import companies from "./slices/company"
export default combineReducers({
  auth,
  jobs,
  companies

});
