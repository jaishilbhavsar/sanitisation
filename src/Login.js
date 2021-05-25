import React, { Component } from "react";
import { FormControl, InputGroup, Modal } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import ForgotPassword from "./ForgotPassword";
import UserService from "./services/UserService";
export default class Login extends Component {
    userService = new UserService();

    constructor(props) {
        super();
        this.state = {
            isRevealPassword: false,
            isForgotPasswordOpen: false

        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.Email.value);
        console.log(event.target.Password.value);
        let data = {
            email: event.target.Email.value,
            password: event.target.Password.value
        };
        this.userService.Login(data);
    }
    handleOpen = async () => {
        await this.setState({ isForgotPasswordOpen: true });
    };
    handleClose = async () => {
        await this.setState({ isForgotPasswordOpen: false });
    };
    showHidePassword = async () => {
        await this.setState({ isRevealPassword: !this.state.isRevealPassword });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    {/* <h3>Log in</h3> */}
                    <div className="form-group">
                        <label>Email</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="email"
                                required
                                name='Email'
                                placeholder="Enter User Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">@</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                required
                                type={this.state.isRevealPassword ? 'text' : 'password'}
                                name='Password'
                                placeholder="Enter Password"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Append onClick={this.showHidePassword}>
                                <InputGroup.Text id="basic-addon1">
                                    {
                                        this.state.isRevealPassword ?
                                            <EyeFill size={20} color="#ff811b" />
                                            :
                                            <EyeSlashFill size={20} color="#ff811b" />
                                    }
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                    {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                    <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                    <p className="forgot-password text-right">
                        <a href="#" onClick={this.handleOpen}>Forgot password?</a>
                    </p>

                </form>
                <Modal
                    onHide={this.handleClose}
                    show={this.state.isForgotPasswordOpen}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Forgot Password
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ForgotPassword closePopup={this.handleClose} />
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>

        );
    }
}