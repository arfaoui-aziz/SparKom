const Question = require("../models/question");

const createQuestion = async (req, res) => {
  const question = new Question(req.body);
  try {
    await question.save();
    res.status(201).send(question);
  } catch (e) {
    res.status(400).send(e);
  }
};



const allQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});
    res.send(questions);
  } catch (e) {
    res.status(500).send(e);
  }
};


const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!question) return res.status(404).send("Inexisting Question");
    return res.send(question);
  } catch (e) {
    res.status(500).send();
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).send("Question Not Found");
    res.send(" Question deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createQuestion,
  updateQuestion,
  allQuestions,
  deleteQuestion,
};
