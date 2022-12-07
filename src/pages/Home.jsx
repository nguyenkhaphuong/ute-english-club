import React from "react";
import { Button, Row, Col, Card, Form } from "react-bootstrap";
import ImageSlider from "../components/imageslider/ImageSlider";

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
        <div className="section">
          <div className="container-sm">
            <div className="container-sm">
              <Row className="border shadow rounded-2 p-4">
                <Col className="my-auto" sm={6}>
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
                </Col>
                <Col className="p-4 text-center" sm={6}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1902/1902654.png"
                    alt="Vocabulary"
                    style={{ width: "8.5rem" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <div className="container-sm">
            <Row className="border shadow rounded-2 p-4">
              <Col className="my-auto" sm={6}>
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
              </Col>
              <Col className="p-4 text-center" sm={6}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6091/6091117.png"
                  alt="Grammar"
                  style={{ width: "8.5rem" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <div className="container-sm">
            <Row className="border shadow rounded-2 p-4">
              <Col className="my-auto" sm={6}>
                <h2 className="fw-bold">Irregular Verbs</h2>
                <p>Here are the common irregular verbs</p>
                <Button
                  as={Link}
                  to="/irregularverbs"
                  className="fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                  }}
                >
                  Start Learning
                </Button>
              </Col>
              <Col className="p-4 text-center" sm={6}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4598/4598485.png"
                  alt="Grammar"
                  style={{ width: "8.5rem" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <div className="container-sm">
            <Row className="border shadow rounded-2 p-4">
              <Col className="my-auto" sm={6}>
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
              </Col>
              <Col className="p-4 text-center" sm={6}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3874/3874176.png"
                  alt="Quiz"
                  style={{ width: "8.5rem" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <div className="container-sm">
            <Row className="border shadow rounded-2 p-4">
              <Col className="my-auto" sm={6}>
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
              </Col>
              <Col className="p-4 text-center" sm={6}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2538/2538026.png"
                  alt="About"
                  style={{ width: "8.5rem" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section px-4">
        <div className="container-sm">
          <div className="border shadow rounded-2 container-sm p-4">
            <Row className="g-3 my-3">
              <Col className="text-center my-auto" md={6}>
                <h2 className="fw-bold">Contact</h2>
                <p>Contact me if you have any questions</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3188/3188217.png"
                  alt="Contact"
                  style={{ width: "8.5rem" }}
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
                    className="rounded-2 fw-bold w-100"
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
