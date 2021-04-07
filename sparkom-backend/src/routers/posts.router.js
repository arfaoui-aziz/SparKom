const express = require("express");
const {
    createPosts,
    getPosts,
    updatePosts,
    deletePosts,
  } = require("../controllers/posts.controller");

const router = new express.Router();
router.post("/", createPosts);
router.get("/", getPosts);
router.patch("/", updatePosts);
router.delete("/",deletePosts)
module.exports = router;