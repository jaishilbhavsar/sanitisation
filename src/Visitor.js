import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
export default class Visitor extends Component {
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
        const { classes } = this.props;
        return (
            <div>
                <p>Visitor Works</p>
                <Button variant="primary" onClick={this.handleOpen}>
                    Open Modal
                </Button>{''}
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