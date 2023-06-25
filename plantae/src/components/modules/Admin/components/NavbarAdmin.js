import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarAdmin = () => {
    return (
        <Navbar expand="lg" style={{ height: "100vh", backgroundColor: "#364A4A" }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex-column">
                        <Navbar.Brand href="#home" className="px-4 text-white">
                            Plantae
                        </Navbar.Brand>
                        <div className="mt-5 px-4">
                            <Nav.Link href="#home" className='text-white'>Add New Product</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Updated Product</Nav.Link>
                            <Nav.Link href="#home" className='text-white'>Delete Product</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Logout</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarAdmin;
