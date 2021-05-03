const express = require("express");
const { requireSignin } = require("../controllers/auth");
const {
  getAllTopics,
  addTopic,
  addFollower,
  getTopicPhoto,
  getTopic,
} = require("../controllers/topic");
const { getUserById } = require("../controllers/user");

const router = express.Router();

router.get("/api/topics", getAllTopics);
router.post("/api/topic/create", addTopic);
router.get("/api/topic/photo/:topicId", getTopicPhoto);
router.route("/api/topic/add/follow").put(requireSignin, addFollower);
router.get("/api/topic/:topicId", getTopic);

module.exports = router;
