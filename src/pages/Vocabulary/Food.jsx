import Table from "react-bootstrap/Table";
import { TabTitle } from "../../utils/GeneralFunctions";
import React, { useState } from "react";
import foodData from "../../database/foodData.json";
import Button from "react-bootstrap/Button";
import { Howl } from "howler";

function Food() {
  TabTitle("Food Vocabulary | UTE English Club");

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

  const [food, setFood] = useState(foodData);
  return (
    <>
      <div
        className="p-4"
        style={{
          backgroundImage: "url('/src/images/Vocabulary/food.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 className="container-sm display-5 fw-bold text-white">Food</h1>
        <p className="container-sm text-white">Words related to food</p>
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
              {food.map((food) => (
                <tr key={food.id}>
                  <td className="lead">{food.word}</td>
                  <td className="text-center">
                    <Button
                      className="rounded-1"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
                      }}
                      onClick={() => SoundPlay(food.audio)}
                    >
                      <span className="fa fa-volume-up"></span>
                    </Button>
                  </td>
                  <td>
                    <img
                      className="mx-auto d-block"
                      src={food.image}
                      width="75px"
                      alt="Transport"
                    />
                  </td>
                  <td className="lead">{food.phonetic}</td>
                  <td className="lead">{food.translation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Food;
