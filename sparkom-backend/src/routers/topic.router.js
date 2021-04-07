const express = require("express");
const {
    createTopic,
    getTopic,
    updateTopic,
    deleteTopic,
  } = require("../controllers/topic.controller");

const router = new express.Router();
router.post("/", createTopic);
router.get("/", getTopic);
router.patch("/", updateTopic);
router.delete("/",deleteTopic)
module.exports = router;