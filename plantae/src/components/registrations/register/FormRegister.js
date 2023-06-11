import React from "react";
import { Button, Form } from "react-bootstrap";

const FormRegister = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.Username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          className="form-input-green"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          className="form-input-green"
        />
      </Form.Group>
      <Button
        variant="success"
        className="w-100 mt-3 bg-button-green border-0 py-2"
        type="submit"
      >
        Daftar
      </Button>
    </Form>
  );
}

export default FormRegister;