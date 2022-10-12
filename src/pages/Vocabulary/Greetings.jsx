import Table from "react-bootstrap/Table";
import { TabTitle } from "../../utils/GeneralFunctions";
import React, { useState } from "react";
import greetingsData from "../../database/greetingsData.json";
import Button from "react-bootstrap/Button";
import { Howl } from "howler";

function Greetings() {
  TabTitle("Greetings Vocabulary | UTE English Club");

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

  const [greetings, setGreetings] = useState(greetingsData);
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1633989464081-16ccd31287a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="container-sm display-5 fw-bold text-white">Greetings</h1>
        <p className="container-sm text-white">Basic words for greetings</p>
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
          <Table striped bordered responsive="sm">
            <thead>
              <tr>
                <th>Words</th>
                <th></th>
                <th>Images</th>
                <th>Phonetics</th>
                <th>Vietnamese Translation</th>
              </tr>
            </thead>
            <tbody>
              {greetings.map((greetings) => (
                <tr key={greetings.id}>
                  <td className="lead">{greetings.word}</td>
                  <td className="text-center">
                    <Button
                      className="rounded-1"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                      onClick={() => SoundPlay(greetings.audio)}
                    >
                      <span className="fa fa-volume-up"></span>
                    </Button>
                  </td>
                  <td>
                    <img
                      className="mx-auto d-block"
                      src={greetings.image}
                      width="75px"
                      alt="Transport"
                    />
                  </td>
                  <td className="lead">{greetings.phonetic}</td>
                  <td className="lead">{greetings.translation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Greetings;
