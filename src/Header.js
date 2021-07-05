import React, { Component } from 'react';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
import './Header.scss';
import logo from './assets/images/logo_transparent.png';
export default class Header extends Component {
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
            <div className="Header">
                <Navbar bg="dark" variant="dark" expand="lg" sticky="left" className="sidebar">
                    <Container>
                        <Navbar.Brand href="/visitor">
                            <img src={logo} alt="logo" />
                            {/* <Image src={logo} fluid crop="fill"></Image> */}
                        </Navbar.Brand>
                        {/* <Navbar.Brand href="/visitor">Be Wise, Sanitise.</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='#aboutUs'>My Addresses</Nav.Link>
                                <Nav.Link href='#aboutUs'>My Bookings</Nav.Link>
                                <Nav.Link href='#contactUs'>My Orders</Nav.Link>
                                <Nav.Link>
                                    <Button variant="primary" onClick={this.handleOpen}>
                                        {localStorage.getItem("name")}, Logout ?
                                    </Button>
                                </Nav.Link>
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