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
} = require("../controllers/post");

const router = express.Router();

router.get("/:userId", auth, getAllPosts);
router.get("/by/:userId", auth, userPosts);
router.delete("/:postId", auth, isOwner, deletePost);
router.post("/create/:userId",auth,  addPost);
router.put("/like", auth, likePost);
router.put("/unlike", auth, unlikePost);
router.put("/comment", auth, addComment);
router.put("/uncomment", auth, deleteComment);
router.get("/photo/:postId", getPostPhoto);
//router.param("userId", getUserById);
router.param("postId", getPostById);

router.put("/:postId", auth, updatePost);



module.exports = router;