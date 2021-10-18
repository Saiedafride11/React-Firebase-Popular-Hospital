import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="header-container">
                    <Container>
                        <Navbar.Brand href="#home">Popular Hospital</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {   
                                user?.displayName ? 
                                <Button onClick={logOut} variant="light">LogOut</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                {   
                                    user?.displayName ? 
                                    ' Signed in as: '
                                    :
                                    ''
                                }
                                <a href="#login">{user?.displayName} </a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;