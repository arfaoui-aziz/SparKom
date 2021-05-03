const express = require("express");
const auth = require("../middleware/auth");
const {
  getMyProfile,
  updateProfile,
  deleteMyProfile,
  followUser,
  getProfileByID,
  getFollowers,
} = require("../controllers/profile.controller");

const router = new express.Router();

// router.post("/", auth, createProfile);
router.get("/followers/:id", auth, getProfileByID);
router.get("/followers", auth, getFollowers);
router.get("/", auth, getMyProfile);

router.patch("/", auth, updateProfile);
router.delete("/", auth, deleteMyProfile);
router.post("/follow/:id", auth, followUser);

module.exports = router;
