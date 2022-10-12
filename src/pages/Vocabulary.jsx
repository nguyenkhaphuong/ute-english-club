import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

import TransportationIcon from "../images/transportation.png";
import ComputerIcon from "../images/desktop.png";
import TravelIcon from "../images/travel.png";
import FoodIcon from "../images/food.png";

import { TabTitle } from "../utils/GeneralFunctions";

import { Link } from "react-router-dom";

function Vocabulary() {
  TabTitle("Vocabulary | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: 'url("src/images/vocabulary.jpg")',
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Vocabulary</h1>
        <p className="container-sm">
          Here are the list of topics that you want to learn
        </p>
      </div>
      <div className="section my-3 px-4">
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
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "1200px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 mx-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src="https://cdn-icons-png.flaticon.com/512/3385/3385913.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                      <Card.Title className="h5 text-center fw-bold">
                        Greetings
                      </Card.Title>
                      <Card.Text className="text-center">
                        Words for basic greetings
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      to="greetings"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "900px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 m-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src={TransportationIcon}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                      <Card.Title className="h5 text-center fw-bold">
                        Transportation
                      </Card.Title>
                      <Card.Text className="text-center">
                        Words for transportation
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      to="transportation"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "900px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 m-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src={ComputerIcon}
                    />
                  </Col>
                  <Col md={8}>
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
                      to="computers"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "1200px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 mx-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src={TravelIcon}
                    />
                  </Col>
                  <Col md={8}>
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
                      to="travelling"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "1200px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 mx-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src={FoodIcon}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                      <Card.Title className="h5 text-center fw-bold">
                        Food
                      </Card.Title>
                      <Card.Text className="text-center">
                        Words for food
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      to="food"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex align-item-stretch" md={6}>
              <Card style={{ maxWidth: "1200px" }}>
                <Row className="g-0">
                  <Col className="m-auto" md={4}>
                    <Card.Img
                      className="p-3 mx-auto d-block"
                      variant="top"
                      style={{ width: "60%" }}
                      src="https://cdn-icons-png.flaticon.com/512/2995/2995101.png"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body style={{ backgroundColor: "#e1e1e1" }}>
                      <Card.Title className="h5 text-center fw-bold">
                        Music
                      </Card.Title>
                      <Card.Text className="text-center">
                        Words for music
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      to="music"
                      className="container-fluid fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                    >
                      Start Learning
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Vocabulary;
