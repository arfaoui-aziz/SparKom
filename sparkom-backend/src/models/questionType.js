const mongoose = require("mongoose");

const questionTypeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  
});

const QuestionType = mongoose.model("QuestionType", topicSchema);

module.exports = QuestionType;