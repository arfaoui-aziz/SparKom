import React, { useState } from "react";
import "../../assets/css/quiz.css";
import { useSelector } from "react-redux";
import { quizSelector } from "../../store/slices/quiz";
export default function Questions() {
  const questions = useSelector(quizSelector);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    0: "answer_a",
    1: "answer_b",
    2: "answer_c",
    3: "answer_d",
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (
      questions[currentQuestion].correct_answer === correctAnswers[isCorrect]
    ) {
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
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {Object.values(questions[currentQuestion].answers).map(
                (answerOption, i) =>
                  answerOption && (
                    <button onClick={() => handleAnswerOptionClick(i)}>
                      {answerOption}
                    </button>
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
