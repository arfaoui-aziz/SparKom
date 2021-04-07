const express = require("express");
const {
    createTag,
    getTag,
    deleteTag,
  } = require("../controllers/tag.controller");

const router = new express.Router();
router.post("/", createTag);
router.get("/", getTag);
router.delete("/",deleteTag)
module.exports = router;