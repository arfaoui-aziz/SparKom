const express = require("express");
const { requireSignin } = require("../controllers/auth");
const {
  getAllTopics,
  addTopic,
  addFollower,
  getTopicPhoto,
} = require("../controllers/topic");
const { getUserById } = require("../controllers/user");

const router = express.Router();

router.get("/api/topics", requireSignin, getAllTopics);
router.post("/api/topic/create", requireSignin, addTopic);
router.get("/api/topic/photo/:topicId", getTopicPhoto);
router.route("/api/topic/add/follow").put(requireSignin, addFollower);

module.exports = router;
