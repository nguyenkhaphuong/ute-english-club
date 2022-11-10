import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

//import quizzes images
import VocabularyQuiz from "../images/dictionary.png";
import GrammarQuiz from "../images/grammar.png";

import { TabTitle } from "../utils/GeneralFunctions";
import { Link } from "react-router-dom";

function Quiz() {
  TabTitle("Quiz | UTE English Club");
  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: 'url("src/images/quiz.jpg")',
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Quiz</h1>
        <p className="container-sm">Review your lessons with quizzes</p>
      </div>
      <div className="section mt-3 px-4">
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
          <Row className="mt-1 gy-4">
            <Col md={6}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "30%" }}
                  src={VocabularyQuiz}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="text-center fw-bold">
                    Vocabulary
                  </Card.Title>
                  <Card.Text className="text-center">
                    Review new words you have learned
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/quiz/vocabulary"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Practicing
                </Button>
              </Card>
            </Col>

            <Col md={6}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "30%" }}
                  src={GrammarQuiz}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="text-center fw-bold">
                    Grammar
                  </Card.Title>
                  <Card.Text className="text-center">
                    Review the basic grammar
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/quiz/grammar"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Practicing
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Quiz;
