const express = require("express");
const auth = require("../middleware/auth");

const {
  addPost,
  getAllPosts,
  userPosts,
  getPostById,
  isOwner,
  deletePost,
  likePost,
  unlikePost,
  deleteComment,
  addComment,
  updatePost,
  getPostPhoto,
} = require("../controllers/postGr");
const { getUserById } = require("../controllers/user.controller");

const router = express.Router();

router.get("/api/posts/:userId", auth, getAllPosts);
router.get("/api/posts/by/:userId", auth, userPosts);
router.delete("/api/post/:postId", auth, isOwner, deletePost);
router.post("/api/post/create/:userId", auth, addPost);
router.put("/api/post/like", auth, likePost);
router.put("/api/post/unlike", auth, unlikePost);
router.put("/api/post/comment", auth, addComment);
router.put("/api/post/uncomment", auth, deleteComment);
router.get("/api/post/photo/:postId", getPostPhoto);
router.param("userId", getUserById);
router.param("postId", getPostById);

router.put("/api/posts/:postId", auth, updatePost);



module.exports = router;