const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "QuestionType",
      },
      tags: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Tag",
      },
      answerss: [
        {
          answer_txt: String,
          responder: mongoose.Schema.Types.ObjectId,
          cretedDate: Date,
          vote:Number,
          isValidate :{ type: Boolean, default: false },
        },
      ],
      cretedDate: Date,
      closedDate: Date,
      title: String,
      body: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },

});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
