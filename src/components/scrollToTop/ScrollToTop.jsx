import React from "react";
import { Button } from "react-bootstrap";

export default function ScrollToTop() {
  const btnScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
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
    </div>
  );
}
