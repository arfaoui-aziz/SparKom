import React, { useState } from "react";
import "../../assets/css/quiz.css";
export default function Questions() {
  const questions = [
    {
      questionText:
        "Which of the following methods in a React Component is called after the component is rendered for the first time?",
      answerOptions: [
        { answerText: "componentDidMount", isCorrect: true },
        { answerText: "componentDidUpdate", isCorrect: false },
        { answerText: "componentMounted", isCorrect: false },
        { answerText: "componentUpdated", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is the correct syntax for a button click event handler foo ?",
      answerOptions: [
        { answerText: "<button onClick={this.foo()}>", isCorrect: false },
        { answerText: "<button onClick={this.foo}>", isCorrect: true },
        { answerText: "<button onclick={this.foo()}>", isCorrect: false },
        { answerText: "<button onclick={this.foo}>", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following methods in a React Component is called after the component is rendered for the first time?",
      answerOptions: [
        { answerText: "componentDidMount", isCorrect: true },
        { answerText: "componentDidUpdate", isCorrect: false },
        { answerText: "componentMounted", isCorrect: false },
        { answerText: "componentUpdated", isCorrect: false },
      ],
    },
    {
      questionText: "What is state in React ?",
      answerOptions: [
        { answerText: "A persistant storage.", isCorrect: false },
        { answerText: "Module", isCorrect: false },
        { answerText: "Class", isCorrect: false },
        {
          answerText: "An internal data store (object) of a component.",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz__body">
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
