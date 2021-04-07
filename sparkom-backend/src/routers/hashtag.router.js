const express = require("express");
const {
    createHashtag,
    getHashtag,
    deleteHashtag,
  } = require("../controllers/hashtag.controller");

const router = new express.Router();
router.post("/", createHashtag);
router.get("/", getHashtag);
router.delete("/",deleteHashtag)
module.exports = router;