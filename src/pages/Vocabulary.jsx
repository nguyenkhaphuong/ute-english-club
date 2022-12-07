import React from "react";
import { Button, Accordion, Table } from "react-bootstrap";

import vocabulary from "../database/vocabulary.json";

import { TabTitle } from "../utils/GeneralFunctions";

import { Howl } from "howler";

function Vocabulary() {
  TabTitle("Vocabulary | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
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
          <Accordion>
            {vocabulary.map((vocab) => {
              return (
                <div key={vocab.id}>
                  <Accordion.Item className="shadow p-2" eventKey={vocab.id}>
                    <Accordion.Header>
                      <img
                        style={{ width: "2em", marginRight: "1.2em" }}
                        src={vocab.image}
                        alt={vocab.title}
                      />
                      <h5 className="fw-bold">{vocab.title}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive="sm">
                        <thead
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                            color: "white",
                          }}
                        >
                          <tr>
                            <th>Words</th>
                            <th></th>
                            <th>Images</th>
                            <th>Phonetics</th>
                            <th>Vietnamese Translation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vocab.words &&
                            vocab.words?.map((word) => {
                              return (
                                <tr key={word.id}>
                                  <td>{word.word}</td>
                                  <td className="text-center">
                                    <Button
                                      className="rounded-1"
                                      style={{
                                        background:
                                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                                      }}
                                      onClick={() => SoundPlay(word.audio)}
                                    >
                                      <span className="fa fa-volume-up"></span>
                                    </Button>
                                  </td>
                                  <td>
                                    <img
                                      className="mx-auto d-block"
                                      src={word.image}
                                      style={{
                                        width: "2.5em",
                                        maxWidth: "8em",
                                      }}
                                      alt="Transport"
                                    />
                                  </td>
                                  <td>{word.phonetic}</td>
                                  <td>{word.translation}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
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

export default Vocabulary;
