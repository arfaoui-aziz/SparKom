const express = require("express");
const {
    createQuestionType,
    getQuestionType,
    deleteQuestionType,
  } = require("../controllers/questionType.controller");

const router = new express.Router();
router.post("/", createQuestionType);
router.get("/", getQuestionType);
router.delete("/",deleteQuestionType)
module.exports = router;