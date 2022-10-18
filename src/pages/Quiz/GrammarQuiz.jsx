import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GrammarQuiz() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
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
    <>
      <div className="section p-4 mt-3">
        <div className="container-sm">
          <div className="container-sm rounded border border-dark p-5">
            {showScore ? (
              <div className="display-5 score-section">
                You scored {score} out of {questions.length}
                <Button
                  className="d-block rounded p-2 mt-3 fw-bold"
                  onClick={() => window.location.reload(false)}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                    fontSize: "20px",
                  }}
                >
                  Reset Quiz
                </Button>
                <Button
                  className="d-inline rounded p-2 mt-3 fw-bold"
                  as={Link}
                  to="/quiz"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                    fontSize: "20px",
                  }}
                >
                  Go Back
                </Button>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="fw-bold h3 question-count mb-2">
                    <span key={questions.id}>
                      Question {currentQuestion + 1}
                    </span>
                    /{questions.length}
                  </div>
                  <div className="h4 question-text mb-2">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section mt-4">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Button
                        className="w-100 rounded p-2 mt-2 fw-bold"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                          fontSize: "20px",
                        }}
                      >
                        {answerOption.answerText}
                      </Button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GrammarQuiz;
