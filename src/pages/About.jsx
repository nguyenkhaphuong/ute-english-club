import React from "react";
import { Row, Col } from "react-bootstrap";

import { TabTitle } from "../utils/GeneralFunctions";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

function About() {
  TabTitle("About | UTE English Club");

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
        }}
      >
        <h1 className="container-sm display-5 fw-bold">About</h1>
        <p className="container-sm">About this page</p>
      </div>
      <div className="section px-4 mt-3">
        <div className="container-sm p-4">
          <ScrollToTop />
          <Row className="border shadow rounded-2 p-4">
            <Col className="text-center my-auto" md={3}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2538/2538026.png"
                alt="Info"
                width={"100rem"}
              />
            </Col>
            <Col className="mt-4" md={9}>
              <Row className="h2 fw-bold d-flex justify-content-center">
                About this website
              </Row>
              <Row className="d-flex justify-content-center">
                English is the most popular foreign language which is used by
                both native and non-native speakers around the world. People use
                English in many ways such as watching TV shows and movies,
                travelling overseas, getting a job, etc.
                <br />
                <br />
                Nowadays, people learn English by taking classes at school,
                taking online courses or going to English training center.
                However, due to Covid-19, not everyone can afford to study at
                centers or take paid online courses.
                <br />
                <br />
                This is why we create this website so that everyone can learn
                English anytime, anywhere without having to pay for tuition,
                online courses, bootcamps, and so on. This free English resource
                website is what learners need to study or improve their English
                and it's 100% FREE.
              </Row>
            </Col>
          </Row>
          <Row className="border shadow rounded-2 mt-4 p-4">
            <Col className="text-center my-auto" md={3}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4310/4310155.png"
                alt="Info"
                width={"45%"}
              />
            </Col>
            <Col className="mt-4" md={9}>
              <Row className="h2 fw-bold d-flex justify-content-center">
                About myself
              </Row>
              <Row className="d-flex justify-content-center">
                Hi! My name is Nguyen Kha Phuong, born June 15th, 2000 in Ho Chi
                Minh City, Viet Nam. I am currently a final-year student at Ho
                Chi Minh University of Technology and Education (HCMUTE),
                majoring in Information Technology.
                <br />
                <br />
                I have been studying English for many years, since 1st grade. I
                have got 6.5 in IELTS and 73/120 in TOEFL iBT.
                <br />
                <br />
                For my hobbies, I enjoy listening to music, watching movies,
                playing video games, travelling and vlogging.
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default About;
