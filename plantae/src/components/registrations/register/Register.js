import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageRegister from '../../assets/register.png';
import BackgroundImg from '../../assets/background.jpg';
import FormRegister from './FormRegister';

const Register = () => {
    return (
        <Container fluid className='pb-5' style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <Row>
                <Col md={{ offset: 3, span: 5 }} className="mt-4 p-5" style={{  backgroundImage: `url(${ImageRegister})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <Card className='bg-green-secondary w-75 mx-auto p-4 border-0'>
                        <h4 className='text-end text-green-primary fw-400 custom-fs-4'>Masuk</h4>
                        <h3 className='text-gray fw-500 fs-8 my-3'>Daftar</h3>
                        <FormRegister />
                        <p className='pt-3 custom-fs-1 fw-400 text-center'>Dengan mendaftar, saya menyetujui <span className='fw-600 text-green-primary'>Syarat dan Ketentuan</span> serta <span className='fw-600 text-green-primary'>Kebijakan Privasi</span></p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;