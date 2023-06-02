import React from 'react'
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className='p-5'>
            <Row className='m-5'>
                <Col className='p-0' md={6} sm={12}>
                    <Image src={require('./assets/login.png')} fluid className='w-100' />
                </Col>
                <Col className='bg-green-secondary bg-rounded bg-shadow' md={6} sm={12}>
                    <h4 className='text-end text-green-primary mt-5 me-4 fw-600'>plantae</h4>
                    <h3 className='text-gray fw-500 mt-5 ms-4'>Masuk</h3>
                    <Form className='mx-4 pt-5'>
                        <Form.Group className="mb-3" controlId="exampleForm.Username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" className='form-input-green' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" className='form-input-green' />
                        </Form.Group>
                        <Button variant="success" className='w-100 mt-5 bg-button-green border-0 py-2' type="submit">
                            Masuk
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;