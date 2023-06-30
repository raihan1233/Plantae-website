import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const FormPost = ({ imgURL }) => {

    const [formData, setFormData] = useState({
        nameProduct: "",
        price: 0,
        condition: "",
        packaging: "",
        spesies: "",
        kingdom: "",
        family: "",
        genus: "",
        url_img: imgURL
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Kirim nilai form ke komponen
        console.log(formData);
      };

    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <Row className="mb-3">
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bunga Camelia"
                            name="nameProduct"
                            value={formData.nameProduct}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control 
                            type="text"
                            name="price"
                            placeholder="Rp.200.000"
                            value={formData.price}
                            onChange={handleChange}
                         />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kondisi</Form.Label>
                        <Form.Control 
                            type="text"
                            name="condition" 
                            placeholder="Baru"
                            value={formData.condition}
                            onChange={handleChange}
                         />
                        </Form.Group>
                    </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kemasan</Form.Label>
                    <Form.Control 
                        type="text"
                        name="packaging"
                        placeholder="Bucket"
                        value={formData.packaging}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kingdom</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="kingdom"
                        placeholder="plantae"  
                        value={formData.kingdom}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Spesies</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="spesies" 
                        placeholder="nyphera" 
                        value={formData.spesies}
                        onChange={handleChange}    
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Family</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="family" 
                        placeholder="escelacia" 
                        value={formData.family}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Genus</Form.Label>
                    <Form.Control 
                        type="text"
                        name="genus" 
                        placeholder="geneseae" 
                        value={formData.genus}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 3, offset: 9 }}>
                <Button
                    type="submit"
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