import React from "react";
import Button from "react-bootstrap/Button";

function PresentPerfect() {
  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Present Simple</h1>
        <p className="container-sm">
          Learn the basics of the present simple and practice using it
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
        <div className="container-sm lead">
          The present simple tense is the most basic grammar tense in English
          that is used to to give instructions, or to express habits, reported
          truths, etc.
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Basic Form</h2>
          The basic form of present simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-25 rounded border h3 fw-bold"
          >
            S + V + Object
          </div>
          <strong>For example:</strong>{" "}
          <i>
            I <strong>live</strong> in Ho Chi Minh city.
          </i>
          <div className="mt-3 fs-lg">
            But for he/she/it, we add an <i className="fw-bold">-s</i> :
            <br />
            <div className="mt-3">
              <strong>For example:</strong>{" "}
              <i>
                She <strong>works</strong> in the office.
              </i>
            </div>
          </div>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Negative form</h2>
          The negative form of present simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            S + don't/doesn't + V + Object
          </div>
          <strong>For example: </strong>
          <i>
            I <strong>don't live</strong> in Ho Chi Minh city.
            <br />
            She <strong>doesn't work</strong> in Vietnam.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Interrogative Form</h2>
          The Interrogative form of present simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            Do/Does + S + V + Object ?
          </div>
          <strong>For example:</strong>{" "}
          <i>
            <strong>Do</strong> you live in Ho Chi Minh city?
          </i>
          <br />
          <i>
            <strong>Does</strong> he play soccer?
          </i>
        </div>
      </div>
    </>
  );
}

export default PresentPerfect;
