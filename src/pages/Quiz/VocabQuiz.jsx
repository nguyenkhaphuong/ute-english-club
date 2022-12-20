import React, { useState, useEffect } from "react";
import { Accordion, Button } from "react-bootstrap";

import { onSnapshot, orderBy, query } from "firebase/firestore";
import { vocabQuizCollection } from "../../../firebase";

import { TabTitle } from "../../utils/GeneralFunctions";

function VocabQuiz() {
  TabTitle("Vocabulary Quiz | UTE English Club");

  const [vocabQuiz, setVocabQuiz] = useState([]);
  const queryRef = query(vocabQuizCollection, orderBy("id", "asc"));
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setVocabQuiz(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < vocabQuiz[0].questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Vocabulary Quiz</h1>
        <p className="container-sm">Review your vocabulary with quizzes</p>
      </div>
      <div className="section p-4 mt-3">
        <Button
          className="btn-floating sticky-bottom btn-lg justify-content-center align-self-center rounded-circle"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "50px",
            width: "50px",
            height: "50px",
            background:
              "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
          }}
          onClick={btnScrollToTop}
        >
          <span className="fas fa-arrow-up"></span>
        </Button>
        <div className="container-sm">
          {vocabQuiz &&
            vocabQuiz.map((vocabQuiz) => (
              <div key={vocabQuiz.id}>
                <Accordion>
                  <Accordion.Item
                    className="shadow p-2"
                    eventKey={vocabQuiz.id}
                  >
                    <Accordion.Header>
                      <img
                        style={{ width: "2em", marginRight: "1.2em" }}
                        src={vocabQuiz.image}
                        alt={vocabQuiz.name}
                      />
                      <h5 className="fw-bold">{vocabQuiz.name}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="shadow container-sm rounded-2 border p-5">
                        {showScore ? (
                          <div className="display-5 score-section">
                            <p>
                              You scored {score} out of{" "}
                              {vocabQuiz.questions.length} correct
                            </p>
                            <Button
                              className="rounded-2 shadow-sm p-2 mt-3 me-3 fw-bold"
                              onClick={resetQuiz}
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                                fontSize: "20px",
                              }}
                            >
                              Reset Quiz
                            </Button>
                          </div>
                        ) : (
                          <>
                            <div className="question-section">
                              <div className="fw-bold h3 question-count mb-2">
                                <span>Question {currentQuestion + 1}</span>/
                                {vocabQuiz.questions.length}
                              </div>
                              <div className="h5 question-text mb-2">
                                {
                                  vocabQuiz.questions[currentQuestion]
                                    .questionText
                                }
                                <br />
                                <img
                                  className="mx-auto d-block"
                                  src={
                                    vocabQuiz.questions[currentQuestion].image
                                  }
                                  alt="Info"
                                  width={"125px"}
                                  style={{ maxWidth: "40%" }}
                                />
                              </div>
                            </div>
                            <div className="answer-section mt-2">
                              <p className="fw-bold">Choose your answer:</p>
                              {vocabQuiz.questions[
                                currentQuestion
                              ].answerOptions.map((answerOption) => (
                                <Button
                                  key={answerOption.id}
                                  className="w-100 rounded-2 shadow-sm p-2 mt-2 fw-bold"
                                  onClick={() =>
                                    handleAnswerOptionClick(
                                      answerOption.isCorrect
                                    )
                                  }
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                                    fontSize: "20px",
                                  }}
                                >
                                  {answerOption.answerText}
                                </Button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default VocabQuiz;
