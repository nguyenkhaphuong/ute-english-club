import "./Topbar.scss";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function topbar() {
  return (
    <Navbar fixed="top" className="nav-color px-4" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} width="50" className="img-responsive" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-align">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/vocabulary">
              <strong>Vocabulary</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/grammar">
              <strong>Grammar</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/irregularverbs">
              <strong>Irregular Verbs</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/quiz">
              <strong>Quiz</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <strong>About</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <strong>Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default topbar;
