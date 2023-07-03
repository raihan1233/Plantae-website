import React, { useState, useEffect } from "react";
import { Alert, Button, Form } from 'react-bootstrap';

const FormLogin = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const [data, setData] = useState([]);

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if username exists
    const isUsernameExist = data.some((item) => item.username === formData.username);

    if (!isUsernameExist) {
      setIsUsernameValid(false);
      return;
    }

     // Check if password is correct
     const user = data.find((item) => item.username === formData.username);

    if (user.password !== formData.password) {
      setIsPasswordValid(false);
      return;
    }

    if (isUsernameExist && user) {
      window.location.href = '/home'
    }
  };

  const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/registration');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    const isFormValid = formData.username !== "" && formData.password !== "";
    setIsButtonDisabled(!isFormValid);
  }, [formData]);

  return (
    <Form className="mx-4 pt-5" onSubmit={handleSubmit}>
       {!isUsernameValid && (
        <Alert variant="danger">Username is not registered</Alert>
      )}
      {!isPasswordValid && (
        <Alert variant="danger">Incorrect password</Alert>
      )}
      <Form.Group className="mb-3" controlId="exampleForm.Username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          className="form-input-green bg-none"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          className="form-input-green bg-none"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="success"
        className="w-100 mt-5 bg-button-green border-0 py-2"
        type="submit"
      >
        Masuk
      </Button>
    </Form>
  );
}

export default FormLogin;