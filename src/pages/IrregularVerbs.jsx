import { Table } from "react-bootstrap";
import { TabTitle } from "../utils/GeneralFunctions";
import { irregularVerbsCollection } from "../../firebase";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

function IrregularVerbs() {
  TabTitle("Irregular Verbs | UTE English Club");

  const [verbs, setVerbs] = useState([]);
  const queryRef = query(irregularVerbsCollection, orderBy("base", "asc"));
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setVerbs(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    })
  );

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
        <ScrollToTop />
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
