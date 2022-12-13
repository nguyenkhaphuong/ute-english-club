import React, { useState, useEffect } from "react";
import { Button, Accordion } from "react-bootstrap";

import { grammarCollection } from "../../firebase";
import { onSnapshot } from "firebase/firestore";

import { TabTitle } from "../utils/GeneralFunctions";

function Grammar() {
  TabTitle("Grammar | UTE English Club");

  const [grammar, setGrammar] = useState([]);
  useEffect(() =>
    onSnapshot(grammarCollection, (snapshot) => {
      setGrammar(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    })
  );

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
        <h1 className="container-sm display-5 fw-bold">Grammar</h1>
        <p className="container-sm">
          Here are the basic grammar structures you need to master your English
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
        <div className="container-sm">
          <Accordion>
            {grammar &&
              grammar.map((grammar) => {
                return (
                  <div key={grammar.id}>
                    <Accordion.Item
                      className="shadow p-2"
                      eventKey={grammar.id}
                    >
                      <Accordion.Header>
                        <h5 className="fw-bold">{grammar.title}</h5>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container-sm">
                          {grammar.description}
                        </div>
                        <div className="container-sm mt-4">
                          <h2 className="fw-bold">Basic Form</h2>
                          The basic form of {grammar.title}:
                          <div
                            style={{ backgroundColor: "#dbdbec" }}
                            className="my-3 text-center p-3 rounded border border-secondary h3 fw-bold"
                          >
                            {grammar.basicForm}
                          </div>
                          <strong>For example:</strong>{" "}
                          <i>{grammar.basicExample}</i>
                        </div>
                        <div className="container-sm mt-4">
                          <h2 className="fw-bold">Negative form</h2>
                          The negative form of {grammar.title}:
                          <div
                            style={{ backgroundColor: "#dbdbec" }}
                            className="my-3 text-center p-3 rounded border border-secondary h3 fw-bold"
                          >
                            {grammar.negativeForm}
                          </div>
                          <strong>For example: </strong>
                          <i>{grammar.negativeExample}</i>
                        </div>
                        <div className="container-sm mt-4">
                          <h2 className="fw-bold">Interrogative Form</h2>
                          The Interrogative form of {grammar.title}:
                          <div
                            style={{ backgroundColor: "#dbdbec" }}
                            className="my-3 text-center p-3 rounded border border-secondary h3 fw-bold"
                          >
                            {grammar.interrogativeForm}
                          </div>
                          <strong>For example: </strong>
                          <i>{grammar.interrogativeExample}</i>
                        </div>
                        <div className="container-sm mt-4">
                          <h2 className="fw-bold">Exercises</h2>
                          {grammar.exercises &&
                            grammar.exercises.map((exercise) => {
                              return (
                                <p key={exercise.id}>
                                  {exercise.id}. {exercise.sentence}
                                  <strong>{exercise.clue}</strong>
                                </p>
                              );
                            })}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                );
              })}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Grammar;
