import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div>
      <Form action="https://formspree.io/f/xwkzqrar" method="POST">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>
            <span className="fas fa-user"></span> Your Name
            <strong>*</strong>
          </Form.Label>
          <Form.Control
            className="rounded-2"
            type="text"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>
            <span className="fas fa-at"></span> Email address
            <strong>*</strong>
          </Form.Label>
          <Form.Control
            className="rounded-2"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>
            <span className="fas fa-envelope"></span> Subject
            <strong>*</strong>
          </Form.Label>
          <Form.Control
            className="rounded-2"
            type="text"
            name="subject"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>
            <span className="fas fa-solid fa-comment"></span> Your Message
            <strong>*</strong>
          </Form.Label>
          <Form.Control
            className="rounded-2"
            as="textarea"
            name="message"
            rows={3}
            required
          />
        </Form.Group>
        <Button
          className="rounded-2 fw-bold w-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)",
          }}
          type="submit"
        >
          <span className="fas fa-paper-plane"></span> Submit
        </Button>
      </Form>
    </div>
  );
}
