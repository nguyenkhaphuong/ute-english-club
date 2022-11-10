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
        <h1 className="container-sm display-5 fw-bold">Present Perfect</h1>
        <p className="container-sm">
          Learn the basics of the present perfect and practice using it
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
          The present perfect is used to something that started in the past and
          continues in the present.
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Basic Form</h2>
          The basic form of present perfect:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-25 rounded border h3 fw-bold"
          >
            S + have/has + V(past participle) + Object
          </div>
          <strong>For example:</strong>{" "}
          <i>
            I <strong>have lived</strong> in Ho Chi Minh city for 8 years.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Negative form</h2>
          The negative form of present perfect:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            S + haven't/hasn't + V(past participle) + Object
          </div>
          <strong>For example: </strong>
          <i>
            I <strong>haven't seen</strong> a concert before.
            <br />
            She <strong>hasn't seen</strong> her old friends since high school.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Interrogative Form</h2>
          The Interrogative form of present perfect:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            Have/Has + S + V(past participle) + Object ?
          </div>
          <strong>For example:</strong>{" "}
          <i>
            <strong>Have</strong> you <strong>finished</strong> your assignment
            yet?
          </i>
        </div>
      </div>
    </>
  );
}

export default PresentPerfect;
