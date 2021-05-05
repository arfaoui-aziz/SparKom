const express = require("express");
const { requireSignin } = require("../controllers/auth");

const {
  getAllQuestions,
  addQuestion,
  userQuestions,
  getQuestionById,
  isOwner,
  likeQuestion,
  unlikeQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
  addAnswer,
  deleteAnswer,
} = require("../controllers/question");
const { getUserById } = require("../controllers/user");

const router = express.Router();

router.get("/api/questions", getAllQuestions);
router.get("/api/questions/by/:userId", requireSignin, userQuestions);
router.delete("/api/question/:questionId", requireSignin, isOwner, deleteQuestion);
router.post("/api/question/create/:userId", requireSignin, addQuestion);
router.put("/api/question/like", requireSignin, likeQuestion);
router.put("/api/question/unlike", requireSignin, unlikeQuestion);

router.param("userId", getUserById);
router.param("questionId", getQuestionById);
router.put("/api/questions/:questionId", requireSignin, updateQuestion);
router.get("/api/question/:questionId", getQuestion);
router.put("/api/question/answer", requireSignin, addAnswer);
router.put("/api/question/unanswer", requireSignin, deleteAnswer);


module.exports = router;