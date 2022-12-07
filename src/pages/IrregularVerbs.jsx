import { Table, Button } from "react-bootstrap";
import { TabTitle } from "../utils/GeneralFunctions";
import verbsData from "../database/irregularVerbs.json";
import React, { useState } from "react";

function IrregularVerbs() {
  TabTitle("Irregular Verbs | UTE English Club");

  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [verbs] = useState(verbsData);
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundColor: "#dbdbec",
        }}
      >
        <h1 className="container-sm display-5 fw-bold">Irregular Verbs</h1>
        <p className="container-sm">Here are the common irregular verbs</p>
      </div>
      <div className="section mt-3 px-4">
        {/*Scroll to top button*/}
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
          <Table className="shadow" striped bordered responsive="sm">
            <thead
              className="text-white"
              style={{
                background:
                  "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
              }}
            >
              <tr>
                <th>Base verbs</th>
                <th>Past Simple</th>
                <th>Past Participle</th>
              </tr>
            </thead>
            <tbody>
              {verbs.map((verbs) => (
                <tr key={verbs.base}>
                  <td>{verbs.base}</td>
                  <td>{verbs.pastSimple}</td>
                  <td>{verbs.pastParticiple}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default IrregularVerbs;
