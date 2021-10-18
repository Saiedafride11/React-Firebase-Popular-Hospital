import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Popular Diagnostic Center</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/clinic">Clinic</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;