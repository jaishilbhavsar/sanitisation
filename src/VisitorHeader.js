import React, { Component } from 'react';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
export default class VisitorHeader extends Component {
    state = {
        isLoginOpen: false,
    };
    handleOpen = async () => {
        await this.setState({ isLoginOpen: true });
    };
    handleClose = async () => {
        await this.setState({ isLoginOpen: false });
    };
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
                                <Nav.Item className="pl-5">
                                    <Button variant="primary" onClick={this.handleOpen}>
                                        Login/SignUp
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <Button variant="primary" onClick={this.handleOpen}>
                    Open Modal
                </Button>{''} */}
                <Modal
                    onHide={this.handleClose}
                    show={this.state.isLoginOpen}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                    </Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                        <LoginSignup />
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        )
    }
}
// const useStyles = (theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '1px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// });