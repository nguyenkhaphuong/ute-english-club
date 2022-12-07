import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function VocabQuiz() {
  const questions = [
    {
      questionText: "desktop",
      image: "https://cdn-icons-png.flaticon.com/512/1865/1865273.png",
      answerOptions: [
        { id: 1, answerText: "máy tính xách tay", isCorrect: false },
        { id: 2, answerText: "đĩa CD", isCorrect: false },
        { id: 3, answerText: "máy tính để bàn", isCorrect: true },
        { id: 4, answerText: "đĩa mềm", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "xe hơi",
      image: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
      answerOptions: [
        { id: 1, answerText: "truck", isCorrect: false },
        { id: 2, answerText: "car", isCorrect: true },
        { id: 3, answerText: "bus", isCorrect: false },
        { id: 4, answerText: "ferry", isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: "món khai vị",
      image: "https://cdn-icons-png.flaticon.com/512/2558/2558974.png",
      answerOptions: [
        { id: 1, answerText: "appetizer", isCorrect: true },
        { id: 2, answerText: "pizza", isCorrect: false },
        { id: 3, answerText: "truck", isCorrect: false },
        { id: 4, answerText: "diet", isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: "musical instrument",
      image: "https://cdn-icons-png.flaticon.com/512/4419/4419474.png",
      answerOptions: [
        { id: 1, answerText: "xe máy", isCorrect: false },
        { id: 2, answerText: "khai vị", isCorrect: false },
        { id: 3, answerText: "sân bay", isCorrect: false },
        { id: 4, answerText: "nhạc cụ", isCorrect: true },
      ],
    },
    {
      id: 5,
      questionText: "nghệ sĩ",
      image: "https://cdn-icons-png.flaticon.com/512/7417/7417828.png",
      answerOptions: [
        { id: 1, answerText: "drum", isCorrect: false },
        { id: 2, answerText: "truck", isCorrect: false },
        { id: 3, answerText: "artist", isCorrect: true },
        { id: 4, answerText: "floppy disk", isCorrect: false },
      ],
    },
    {
      id: 6,
      questionText: "hello",
      image: "https://cdn-icons-png.flaticon.com/512/5129/5129597.png",
      answerOptions: [
        { id: 1, answerText: "xin chào", isCorrect: true },
        { id: 2, answerText: "xe buýt", isCorrect: false },
        { id: 3, answerText: "ăn kiêng", isCorrect: false },
        { id: 4, answerText: "tạm biệt", isCorrect: false },
      ],
    },
    {
      id: 7,
      questionText: "tạm biệt",
      image: "https://cdn-icons-png.flaticon.com/512/4081/4081653.png",
      answerOptions: [
        { id: 1, answerText: "good morning", isCorrect: false },
        { id: 2, answerText: "plane", isCorrect: false },
        { id: 3, answerText: "goodbye", isCorrect: true },
        { id: 4, answerText: "salad", isCorrect: false },
      ],
    },
    {
      id: 8,
      questionText: "nghệ sĩ chơi guitar",
      image: "https://cdn-icons-png.flaticon.com/512/3048/3048387.png",
      answerOptions: [
        { id: 1, answerText: "receptionist", isCorrect: false },
        { id: 2, answerText: "guitarist", isCorrect: true },
        { id: 3, answerText: "piano", isCorrect: false },
        { id: 4, answerText: "laptop", isCorrect: false },
      ],
    },
    {
      id: 9,
      questionText: "suitcase",
      image: "https://cdn-icons-png.flaticon.com/512/1663/1663017.png",
      answerOptions: [
        { id: 1, answerText: "bãi biển", isCorrect: false },
        { id: 2, answerText: "đàn piano", isCorrect: false },
        { id: 3, answerText: "khai vị", isCorrect: false },
        { id: 4, answerText: "vali xách tay", isCorrect: true },
      ],
    },
    {
      id: 10,
      questionText: "airport",
      image: "https://cdn-icons-png.flaticon.com/512/3127/3127367.png",
      answerOptions: [
        { id: 1, answerText: "trạm xe buýt", isCorrect: false },
        { id: 2, answerText: "sân bay", isCorrect: true },
        { id: 3, answerText: "đàn ghi-ta", isCorrect: false },
        { id: 4, answerText: "thuyền", isCorrect: false },
      ],
    },
    {
      id: 11,
      questionText: "bãi biển",
      image: "https://cdn-icons-png.flaticon.com/512/2664/2664650.png",
      answerOptions: [
        { id: 2, answerText: "beach", isCorrect: true },
        { id: 1, answerText: "airport", isCorrect: false },
        { id: 3, answerText: "car", isCorrect: false },
        { id: 4, answerText: "appetizer", isCorrect: false },
      ],
    },
    {
      id: 12,
      questionText: "xe đạp",
      image: "https://cdn-icons-png.flaticon.com/512/562/562008.png",
      answerOptions: [
        { id: 1, answerText: "bus", isCorrect: false },
        { id: 2, answerText: "bicycle", isCorrect: true },
        { id: 3, answerText: "train", isCorrect: false },
        { id: 4, answerText: "truck", isCorrect: false },
      ],
    },
    {
      id: 13,
      questionText: "ambulance",
      image: "https://cdn-icons-png.flaticon.com/512/2869/2869684.png",
      answerOptions: [
        { id: 1, answerText: "xe buýt", isCorrect: false },
        { id: 3, answerText: "xe tải", isCorrect: false },
        { id: 2, answerText: "xe cứu thương", isCorrect: true },
        { id: 4, answerText: "trạm xe buýt", isCorrect: false },
      ],
    },
    {
      id: 14,
      questionText: "good morning",
      image: "https://cdn-icons-png.flaticon.com/512/6744/6744598.png",
      answerOptions: [
        { id: 1, answerText: "tạm biệt", isCorrect: false },
        { id: 3, answerText: "xin chào", isCorrect: false },
        { id: 4, answerText: "bãi biển", isCorrect: false },
        { id: 2, answerText: "chào buổi sáng", isCorrect: true },
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
          <div className="shadow container-sm rounded-2 border p-5">
            {showScore ? (
              <div className="display-5 score-section">
                <p>
                  You scored {score} out of {questions.length} correct
                </p>
                <Button
                  className="rounded-2 shadow-sm p-2 mt-3 me-3 fw-bold"
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
                  className="rounded-2 shadow-sm p-2 mt-3 me-3 fw-bold"
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
                    <br />
                    <img
                      className="mx-auto d-block"
                      src={questions[currentQuestion].image}
                      alt="Info"
                      width={"125px"}
                      style={{ maxWidth: "40%" }}
                    />
                  </div>
                </div>
                <div className="answer-section mt-2">
                  <p className="fw-bold">Choose your answer:</p>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Button
                        key={answerOption.id}
                        className="w-100 rounded-2 shadow-sm p-2 mt-2 fw-bold"
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

export default VocabQuiz;
