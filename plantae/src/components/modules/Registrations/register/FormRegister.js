import React, {useState, useEffect} from "react";
import { Button, Form, Alert } from "react-bootstrap";

const FormRegister = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [fetchedData, setFetchedData] = useState({});
  const [showAlert, setShowAlert] = useState(false)

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3001/sign_up');
        const jsonData = await response.json();
        setFetchedData(jsonData);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

const handleSubmit = async (event) => {
    event.preventDefault();

    const isFormEmpty = Object.values(formData).some((value) => value === "");

    if (isFormEmpty) {
        console.log("data form kosong");
        setShowAlert(true);
        return;
    }
    // Kirim nilai form ke komponen
    console.log(formData);
    try {
        const response = await fetch('http://localhost:3001/sign_up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const jsonData = await response.json();
        console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Form onSubmit={handleSubmit}>
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
        className="w-100 mt-3 bg-button-green border-0 py-2"
        type="submit"
        disabled={Object.values(formData).some((value) => value === "")}
      >
        Daftar
      </Button>
    </Form>
  );
}

export default FormRegister;