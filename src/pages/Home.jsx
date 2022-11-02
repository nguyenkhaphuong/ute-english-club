import React from "react";
import { Button, Row, Col, Card, Form } from "react-bootstrap";
import ImageSlider from "../components/imageslider/ImageSlider";

//import vocabulary images
import TransportationIcon from "../images/transportation.png";
import ComputerIcon from "../images/desktop.png";
import TravelIcon from "../images/travel.png";
import FoodIcon from "../images/food.png";

//import grammar images
import PresentSimple from "../images/presentsimple.png";
import PresentContinous from "../images/presentcontinous.png";
import PastSimple from "../images/pastsimple.png";
import PresentPerfect from "../images/presentperfect.png";

//import quizzes images
import VocabularyQuiz from "../images/dictionary.png";
import GrammarQuiz from "../images/grammar.png";

//import about info image
import Info from "../images/info.png";

import { TabTitle } from "../utils/GeneralFunctions";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  TabTitle("Home | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ImageSlider />
      <div className="section px-4">
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
          <h2 className="fw-bold">Vocabulary</h2>
          <p>Here are the list of topics that you want to learn</p>
          <Button
            as={Link}
            to="/vocabulary"
            className="fw-bold"
            style={{
              background:
                "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
            }}
          >
            Start Learning
          </Button>
          <Row className="mt-1 g-4">
            <Col className="d-flex" md={3}>
              <Card style={{ maxWidth: "100%" }}>
                <Card.Img
                  className="p-3 mx-auto d-block"
                  variant="top"
                  style={{ width: "60%" }}
                  src={TransportationIcon}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h5 text-center fw-bold">
                    Transportation
                  </Card.Title>
                  <Card.Text className="text-center">
                    Words for transportation.
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/vocabulary/transportation"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  src={ComputerIcon}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h5 text-center fw-bold">
                    Computers
                  </Card.Title>
                  <Card.Text className="text-center">
                    Words for computers
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/vocabulary/computers"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  src={TravelIcon}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h5 text-center fw-bold">
                    Travelling
                  </Card.Title>
                  <Card.Text className="text-center">
                    Words for travelling
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/vocabulary/travelling"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  src={FoodIcon}
                />
                <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                  <Card.Title className="h5 text-center fw-bold">
                    Food
                  </Card.Title>
                  <Card.Text className="text-center">Words for food</Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/vocabulary/food"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <h2 className="fw-bold">Grammar</h2>
          <p>
            Here are the basic grammar structures you need to master your
            English
          </p>
          <Button
            as={Link}
            to="/grammar"
            className="fw-bold"
            style={{
              background:
                "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
            }}
          >
            Start Learning
          </Button>
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
                  <Card.Title className="h5 text-center fw-bold">
                    Present Simple
                  </Card.Title>
                  <Card.Text className="text-center">
                    Present Simple Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentsimple"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  <Card.Title className="h5 text-center fw-bold">
                    Past Simple
                  </Card.Title>
                  <Card.Text className="text-center">
                    Past Simple Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/pastsimple"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  <Card.Title className="h5 text-center fw-bold">
                    Present Continous
                  </Card.Title>
                  <Card.Text className="text-center">
                    Present Continous Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentcontinous"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
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
                  <Card.Title className="h5 text-center fw-bold">
                    Present Perfect
                  </Card.Title>
                  <Card.Text className="text-center">
                    Present Perfect Tense
                  </Card.Text>
                </Card.Body>
                <Button
                  as={Link}
                  to="/grammar/presentperfect"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 55%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <h2 className="fw-bold">Quiz</h2>
          <p>Review your lessons with quizzes</p>
          <Button
            as={Link}
            to="/quiz"
            className="fw-bold"
            style={{
              background:
                "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
            }}
          >
            Start Practicing
          </Button>
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
                  <Card.Title className="h5 text-center fw-bold">
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
                  <Card.Title className="h5 text-center fw-bold">
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
      <div className="section px-4">
        <div className="container-sm">
          <h2 className="fw-bold">About</h2>
          <p>About this website</p>
          <Button
            as={Link}
            to="/about"
            className="fw-bold"
            style={{
              background:
                "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
            }}
          >
            Learn More
          </Button>
          <div className="container-sm mt-4">
            <Row className="border rounded-2 p-4">
              <Col className="text-center my-auto" sm={3}>
                <img src={Info} alt="Info" width={"40%"} />
              </Col>
              <Col className="mt-4" sm={9}>
                <Row className="h2 fw-bold d-flex justify-content-center">
                  About this website
                </Row>
                <Row className="d-flex justify-content-center lead">
                  English is the most popular foreign language which is used by
                  both native and non-native speakers around the world. People
                  use English in many ways such as watching TV shows and movies,
                  travelling overseas, getting a job, etc.
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <h2 className="fw-bold">Contact</h2>
          <p>Contact me if you have any questions</p>
          <div className="container-sm my-3"></div>
        </div>
        <div className="container-sm">
          <div className="border rounded-2 container-sm px-4">
            <Row className="g-3 my-3">
              <Col className="text-center my-auto" md={6}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3188/3188217.png"
                  alt="Contact"
                  width="40%"
                />
              </Col>
              <Col md={6}>
                <Form action="https://formspree.io/f/xwkzqrar" method="POST">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>
                      <span className="fas fa-user"></span> Your Name
                      <strong>*</strong>
                    </Form.Label>
                    <Form.Control
                      className="rounded-2"
                      type="text"
                      name="name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>
                      <span className="fas fa-at"></span> Email address
                      <strong>*</strong>
                    </Form.Label>
                    <Form.Control
                      className="rounded-2"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>
                      <span className="fas fa-envelope"></span> Subject
                      <strong>*</strong>
                    </Form.Label>
                    <Form.Control
                      className="rounded-2"
                      type="text"
                      name="subject"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>
                      <span className="fas fa-solid fa-comment"></span> Your
                      Message<strong>*</strong>
                    </Form.Label>
                    <Form.Control
                      className="rounded-2"
                      as="textarea"
                      name="message"
                      rows={3}
                      required
                    />
                  </Form.Group>
                  <Button
                    className="rounded-2 fw-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                    }}
                    type="submit"
                  >
                    <span className="fas fa-paper-plane"></span> Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
