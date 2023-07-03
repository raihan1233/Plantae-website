import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import FormLogin from './FormLogin';
import BackgroundImg from '../../../assets/bg-registration/background.jpg'

const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Container className='p-5'>
                <Row className='m-5'>
                    <Col className='p-0' md={6} sm={12}>
                        <Image src={require('../../../assets/registration/login.png')} fluid className='w-100' />
                    </Col>
                    <Col className='bg-green-secondary bg-rounded bg-shadow' md={6} sm={12}>
                        <h4 className='text-end text-green-primary mt-5 mx-4 fw-500 custom-fs-5'>Plantae</h4>
                        <h3 className='text-gray fw-500 mt-5 mx-4'>Masuk</h3>
                        <FormLogin />
                        <p className='mx-4 fw-300 text-center mt-3'>belum mempunyai akun? <Link to='/signup' className='text-green-primary fw-600 text-decoration-none'>Daftar</Link> </p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Login;