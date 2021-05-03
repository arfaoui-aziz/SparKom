import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
let initialState = {
posts: [],
selectedPost: {},
errors: "",
};
const postsSlice = createSlice({
name: "posts",
initialState,
reducers: {
populatePosts(state, action) {
state.posts = action.payload;
},
selectPost(state, action) {
state.selectedPost = action.payload;
},
unselectPost(state) {
state.selectedPost = null;
},
deletePost: (state, action) => {
const payload = action.payload;
const index = state.posts.findIndex((item) => item._id === payload);
if (index !== -1) {
state.posts.splice(index, 1);
}
},
updatePost: (state, action) => {
const payload = action.payload;
const index = state.posts.findIndex(
(item) => item._id === payload._id
);
if (index !== -1) {
state.posts[index] = payload;
}
},
addPost: (state, action) => {
const payload = action.payload;
state.posts.push(payload);
},
setErrors(state, action) {
state.errors = action.payload;
},
},

});
export const fetchPosts = () => async (dispatch) => {
const [res, error] = await queryApi("posts");
if (error) {
dispatch(setErrors(error));
} else {
dispatch(populatePosts(res));
}
};
export const selectPosts = (state) => {
return [state.posts.posts, state.posts.errors];
};
export const selectSelectedPost = (state) => {
return state.posts.selectedPost;
};
export const {
populatePosts,
selectPost,
unselectPost,
setErrors,
deletePost,
updatePost,
addPost,
} = postsSlice.actions;
export default postsSlice.reducer;