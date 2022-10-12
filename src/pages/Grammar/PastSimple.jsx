import React from "react";
import Button from "react-bootstrap/Button";

function PastSimple() {
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
        <h1 className="container-sm display-5 fw-bold">Past Simple</h1>
        <p className="container-sm">
          Learn the basics of the past simple and practice using it
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
          The past simple tense is used to to talk about events, action that
          occured and was completed at a particular time in the past.
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Basic Form</h2>
          The basic form of past simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 rounded border h3 fw-bold"
          >
            S + V (past) + Object
          </div>
          <strong>For example:</strong>{" "}
          <i>
            I <strong>went</strong> to Hanoi.
            <br />
            She <strong>lived</strong> in Australia.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Negative form</h2>
          The negative form of past simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 rounded border h3 fw-bold"
          >
            S + didn't + V + Object
          </div>
          <strong>For example: </strong>
          <i>
            He <strong>didn't watch</strong> the soccer match yesterday.
            <br />
            She <strong>didn't go</strong> to school.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Interrogative Form</h2>
          The Interrogative form of past simple tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 rounded border h3 fw-bold"
          >
            Did + S + V + Object ?
          </div>
          <strong>For example:</strong>{" "}
          <i>
            <strong>Did</strong> you move to Ho Chi Minh city?
          </i>
          <br />
          <i>
            <strong>Did</strong> he play soccer?
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Exercises</h2>
          <p>
            1. When I _____ young. I _________ playing computer games.{" "}
            <strong>(be/like)</strong>
          </p>
          <p>
            2. They _________ games. <strong>(not play)</strong>
          </p>
          <p>
            3. Many years ago, people _______ to work on foot.{" "}
            <strong>(go)</strong>
          </p>
          <p>
            4. ______ you _______ the soccer match? <strong>(watch)</strong>
          </p>
          <p>
            5. She _________ jogging. <strong>(not go)</strong>
          </p>
          <p>
            6. I _________ TV shows last week. <strong>(watch)</strong>
          </p>
          <p>
            7. We _________ at the hotel in Nha Trang. <strong>(be)</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default PastSimple;
