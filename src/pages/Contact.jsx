import React from "react";
import { Row, Col } from "react-bootstrap";
import { TabTitle } from "../utils/GeneralFunctions";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  TabTitle("Contact | UTE English Club");

  return (
    <>
      <div className="mt-5 px-4">
        <ScrollToTop />
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
              <div className="border rounded-2 shadow container-sm p-4">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Contact;
