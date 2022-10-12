import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { TabTitle } from "../../utils/GeneralFunctions";

function Contact() {
  TabTitle("Contact | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="mt-5 px-4">
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
          <Row className="g-3">
            <Col className="text-center my-auto" md={6}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3188/3188217.png"
                alt="Contact"
                width="40%"
              />
            </Col>
            <Col md={6}>
              <h1 className="display-5 fw-bold">Contact</h1>
              <p>Feel free to contact me if you have any questions</p>
              <div className="border rounded-2 container-sm p-4">
                <Form action="" method="POST">
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
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Contact;
