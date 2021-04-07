const express = require("express");
const {
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
  } = require("../controllers/question.controller");

const router = new express.Router();
router.post("/", createQuestion);
router.get("/", getQuestion);
router.patch("/", updateQuestion);
router.delete("/",deleteQuestion)
module.exports = router;