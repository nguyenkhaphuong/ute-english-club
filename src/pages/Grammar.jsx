import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

import PresentSimple from "../images/presentsimple.png";
import PresentContinous from "../images/presentcontinous.png";
import PastSimple from "../images/pastsimple.png";
import PresentPerfect from "../images/presentperfect.png";
import IrregularVerbs from "../images/irregularverbs.png";

import { TabTitle } from "../utils/GeneralFunctions";

import { Link } from "react-router-dom";

function Grammar() {
  TabTitle("Grammar | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: 'url("src/images/grammar.jpg")',
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Grammar</h1>
        <p className="container-sm">
          Here are the basic grammar structures you need to master your English
        </p>
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
          <Row className="mt-1 g-4">
            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={PresentSimple}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h6 text-center fw-bold">
                    Present Simple
                  </Card.Title>
                  <Card.Text className="h6 text-center">
                    Present Simple Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentsimple"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>

            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={PastSimple}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h6 text-center fw-bold">
                    Past Simple
                  </Card.Title>
                  <Card.Text className="h6 text-center">
                    Past Simple Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/pastsimple"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>

            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={PresentContinous}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h6 text-center fw-bold">
                    Present Continous
                  </Card.Title>
                  <Card.Text className="h6 text-center">
                    Present Continous Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentcontinous"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>

            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={PresentPerfect}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h6 text-center fw-bold">
                    Present Perfect
                  </Card.Title>
                  <Card.Text className="h6 text-center">
                    Present Perfect Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentperfect"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>

            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={IrregularVerbs}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h6 text-center fw-bold">
                    Irregular Verbs
                  </Card.Title>
                  <Card.Text className="h6 text-center">
                    Here are the common irregular verbs
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/irregularverbs"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Grammar;
