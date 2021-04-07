const express = require("express");
const auth = require("../middleware/auth");
const {
  createProfile,
  getMyProfile,
  updateProfile,
  deleteMyProfile,
  followUser,
} = require("../controllers/profile.controller");

const router = new express.Router();

router.post("/", auth, createProfile);
router.get("/", auth, getMyProfile);
router.patch("/", auth, updateProfile);
router.delete("/", auth, deleteMyProfile);
router.post("/follow/:id", auth, followUser);

module.exports = router;
