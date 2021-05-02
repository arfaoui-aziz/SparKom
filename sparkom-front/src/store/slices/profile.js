import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfile: null,
    errors: "",
  },
  reducers: {
    populateProfile(state, action) {
      state.userProfile = action.payload;
    },

    setErrors(state, action) {
      state.errors = action.payload;
    },

    updateProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

//******** Selectors *************************/

export const fetchProfile = () => async (dispatch) => {
  const [res, error] = await queryApi("profile/me");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateProfile(res));
  }
};
export const myProfileSelector = (state) => state.profile?.userProfile;

// export const activeUserSelector = (state) => state.auth?.user;
// export const isAuthenticatedSelector = (state) => state.auth?.isAuthenticated;
// export const oAuthSelector = (state) => state.auth?.oAuth;
// export const avatarSelector = (state) => state.auth?.user?.avatar;

export const {
  setErrors,
  populateProfile,
  updateProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
