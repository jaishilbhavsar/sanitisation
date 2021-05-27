import React, { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                    <Container>
                        <Navbar.Brand href="#home">Sanitise Your Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link className="pr-5" href='/home'>Home</Nav.Link>
                                <Nav.Link className="pr-5" href='/home'>Home</Nav.Link>
                                <Nav.Link className="pr-5" href='/home'>About Us</Nav.Link>
                                <Nav.Link className="pr-5" href='/home'>Contact Us</Nav.Link>
                                <Nav.Item className="">
                                    <Button variant="primary">
                                        Logout
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}