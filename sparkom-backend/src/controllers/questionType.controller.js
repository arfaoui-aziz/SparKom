const QuestionType = require("../models/questionType");

const createQuestionType = async (req, res) => {
  const questionType = new QuestionType(req.body);
  try {
    await questionType.save();
    res.status(201).send(questionType);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateQuestionType = async (req, res) => {
  try {
    const questionType = await QuestionType.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!questionType) return res.status(404).send("Inexisting QuestionType");
    return res.send(questionType);
  } catch (e) {
    res.status(500).send();
  }
};

const allQuestionTypes = async (req, res) => {
  try {
    const questionTypes = await QuestionType.find({});
    res.send(questionTypes);
  } catch (e) {
    res.status(500).send(e);
  }
};



const deleteQuestionType = async (req, res) => {
  try {
    const questionType = await QuestionType.findByIdAndDelete(req.params.id);
    if (!questionType) return res.status(404).send("QuestionType Not Found");
    res.send(" QuestionType deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createQuestionType,
  updateQuestionType,
  allQuestionTypes,
  deleteQuestionType,
};
