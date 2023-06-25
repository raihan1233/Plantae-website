import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const FormPost = () => {
    return (
        <Form className="mt-5">
            <Row className="mb-3">
                <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control type="text" placeholder="Bunga Camelia" />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="text" placeholder="Rp.200.000" />
                    </Form.Group>
                </Col>
                <Col lg={2}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kondisi</Form.Label>
                        <Form.Control type="text" placeholder="Baru" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kemasan</Form.Label>
                        <Form.Control type="text" placeholder="Bucket" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kingdom</Form.Label>
                        <Form.Control type="text" placeholder="plantae" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Spesies</Form.Label>
                        <Form.Control type="text" placeholder="nyphera" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Family</Form.Label>
                        <Form.Control type="text" placeholder="escelacia" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Genus</Form.Label>
                        <Form.Control type="text" placeholder="geneseae" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 3, offset: 9 }}>
                    <Button
                        variant="success"
                        className="w-100 bg-button-green form-input-green"
                    >
                        Tambah Produk
                    </Button>
                </Col>
            </Row>
        </Form>
  );
};

export default FormPost;