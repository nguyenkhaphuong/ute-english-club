import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider() {
  return (
    <>
      <Carousel controls={false} fade>
        <Carousel.Item interval={3000}>
          <img
            className="img-responsive d-block w-100"
            src="src\images\students.jpg"
            alt="First slide"
            style={{ width: "50%" }}
          />
          <Carousel.Caption
            className="d-flex flex-column justify-content-center h-100"
            style={{ top: "0" }}
          >
            <h1 className="fw-bold">Welcome to UTE English Club</h1>
            <p>Learn English anytime, anywhere. 100% FREE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="img-responsive d-block w-100"
            src="src\images\students2.jpg"
            alt="Second slide"
            style={{ width: "50%" }}
          />
          <Carousel.Caption
            className="d-flex flex-column justify-content-center h-100"
            style={{ top: "0" }}
          >
            <h1 className="fw-bold">Welcome to UTE English Club</h1>
            <p>Learn English anytime, anywhere. 100% FREE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="img-responsive d-block w-100"
            src="src\images\students3.jpg"
            alt="Third slide"
            style={{ width: "50%" }}
          />
          <Carousel.Caption
            className="d-flex flex-column justify-content-center h-100"
            style={{ top: "0" }}
          >
            <h1 className="fw-bold">Welcome to UTE English Club</h1>
            <p>Learn English anytime, anywhere. 100% FREE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImageSlider;
