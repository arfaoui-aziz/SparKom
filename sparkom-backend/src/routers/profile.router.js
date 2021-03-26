const express = require("express");
const auth = require("../middleware/auth");
const {
  createProfile,
  getMyProfile,
} = require("../controllers/profile.controller");

const router = new express.Router();

router.post("/", auth, createProfile);
router.get("/", auth, getMyProfile);

module.exports = router;
