import Table from "react-bootstrap/Table";
import { TabTitle } from "../../utils/GeneralFunctions";
import React, { useState } from "react";
import computerData from "../../database/computerData.json";
import Button from "react-bootstrap/Button";
import { Howl } from "howler";

function Computers() {
  TabTitle("Computers Vocabulary | UTE English Club");

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
  const [computer, setComputer] = useState(computerData);

  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: "url('/src/images/Vocabulary/computers.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="container-sm display-5 fw-bold text-white">Computers</h1>
        <p className="container-sm text-white">Words related to computers</p>
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
          <Table striped bordered responsive="sm" size="md">
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
              {computer.map((computer) => (
                <tr key={computer.id}>
                  <td className="lead">{computer.word}</td>
                  <td className="text-center">
                    <Button
                      className="rounded-1"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                      onClick={() => SoundPlay(computer.audio)}
                    >
                      <span className="fa fa-volume-up"></span>
                    </Button>
                  </td>
                  <td>
                    <img
                      className="mx-auto d-block"
                      src={computer.image}
                      width="85px"
                      alt="Transport"
                    />
                  </td>
                  <td className="lead">{computer.phonetic}</td>
                  <td className="lead">{computer.translation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Computers;