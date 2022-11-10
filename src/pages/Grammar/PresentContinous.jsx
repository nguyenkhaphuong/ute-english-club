import React from "react";
import Button from "react-bootstrap/Button";

function PresentContinous() {
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
        <h1 className="container-sm display-5 fw-bold">Present Continous</h1>
        <p className="container-sm">
          Learn the basics of the present continous and practice using it
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
          The present continous tense is used to talk about regular actions or
          activities that are happening at the moment of speaking. It can also
          be used for future plans.
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Basic Form</h2>
          The basic form of present continous tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            S + be (am/is/are) + V-ing + Object
          </div>
          <strong>For example:</strong>{" "}
          <i>
            I <strong>am studying</strong> at New York University.
            <br />
            She <strong>is going</strong> out for dinner with her friends.
            <br />
            They <strong>are watching</strong> a movie.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Negative form</h2>
          The negative form of present continous tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            S + (am/is/are) not + V-ing + Object
          </div>
          <strong>For example: </strong>
          <i>
            I <strong>am not working</strong> at the moment.
            <br />
            She <strong>is not living</strong> with us anymore.
            <br />
            We <strong>are not moving</strong> for America.
          </i>
        </div>
        <br />
        <div className="container-sm mt-2">
          <h2 className="fw-bold">Interrogative Form</h2>
          The Interrogative form of present continous tense:
          <div
            style={{ backgroundColor: "#dbdbec" }}
            className="my-3 text-center p-3 w-50 rounded border h3 fw-bold"
          >
            (Am/Is/Are) + S + V-ing + Object ?
          </div>
          <strong>For example: </strong>
          <i>
            <strong>Are</strong> you <strong>coming back</strong> to Ho Chi Minh
            city?
          </i>
          <br />
          <i>
            <strong>Is</strong> he <strong>playing</strong> video games?
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

export default PresentContinous;
