import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";
import resume from "./slices/resume";
import quiz from "./slices/quiz";
import jobs from "./slices/jobs";
import companies from "./slices/company";
import post from "../redux/reducers/post/postReducer";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
  auth,
  profile,
  resume,
  quiz,
  jobs,
  companies,
  form: reducerForm,
  post,
});
