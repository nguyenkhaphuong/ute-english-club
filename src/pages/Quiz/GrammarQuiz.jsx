import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function GrammarQuiz() {
  const questions = [
    {
      questionText: "Which one is correct for present perfect tense?",
      answerOptions: [
        { id: 1, answerText: "I love you!", isCorrect: false },
        {
          id: 2,
          answerText: "I have been to America since 2016",
          isCorrect: true,
        },
        { id: 3, answerText: "What did you do yesterday?", isCorrect: false },
        { id: 4, answerText: "Lucky you!", isCorrect: false },
      ],
    },
    {
      questionText: "Present continous tense",
      answerOptions: [
        { id: 1, answerText: "S + V-ing + O", isCorrect: true },
        { id: 2, answerText: "S + will V + O", isCorrect: false },
        { id: 3, answerText: "S + V (past simple) + O", isCorrect: false },
        { id: 4, answerText: "S + be V (past participle)", isCorrect: false },
      ],
    },
    {
      questionText: "Phuong ______ at the cinema last night",
      answerOptions: [
        { id: 1, answerText: "be", isCorrect: false },
        { id: 2, answerText: "will be", isCorrect: false },
        { id: 3, answerText: "was", isCorrect: true },
        { id: 4, answerText: "is", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { id: 1, answerText: "1", isCorrect: false },
        { id: 2, answerText: "4", isCorrect: false },
        { id: 3, answerText: "6", isCorrect: false },
        { id: 4, answerText: "7", isCorrect: true },
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
                <br />
                <Button
                  className="rounded p-2 mt-3 me-3 fw-bold"
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
                  className="rounded p-2 mt-3 me-3 fw-bold"
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
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="h5 question-text mb-2">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="answer-section mt-2">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Button
                        key={answerOption.id}
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
