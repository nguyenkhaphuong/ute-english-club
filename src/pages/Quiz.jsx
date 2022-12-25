import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

import { TabTitle } from "../utils/GeneralFunctions";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

function Quiz() {
  TabTitle("Quiz | UTE English Club");

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Quiz</h1>
        <p className="container-sm">Review your lessons with quizzes</p>
      </div>
      <div className="section mt-3 px-4">
        <ScrollToTop />
        <div className="container-sm">
          <Row className="mt-1 gy-4">
            <Col md={6}>
              <Card className="shadow" style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "30%" }}
                  src="https://cdn-icons-png.flaticon.com/512/1902/1902654.png"
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
              <Card className="shadow" style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "30%" }}
                  src="https://cdn-icons-png.flaticon.com/512/6091/6091117.png"
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
