import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { TabTitle } from "../utils/GeneralFunctions";

function NotFound() {
  TabTitle("404 Not Found | UTE English Club");
  return (
    <div className="not-found">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        className="img-fluid img-thumbnail mx-auto d-block"
      />
      <hr />
      <center>
        <Button
          as={Link}
          to="/"
          className="fw-bold"
          style={{
            background:
              "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
          }}
        >
          Back to Homepage
        </Button>
      </center>
    </div>
  );
}

export default NotFound;
