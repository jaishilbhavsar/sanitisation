import React, { Component } from "react";
import { FormControl, InputGroup, Modal } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import ForgotPassword from "./ForgotPassword";
import UserService from "./services/UserService";
import { withAlert } from 'react-alert';
import { Redirect } from "react-router";
class Login extends Component {
    userService = new UserService();
    constructor(props) {
        super(props);
        this.state = {
            isRevealPassword: false,
            isForgotPasswordOpen: false,
            showAlert: false,
            alertVariant: "success",
            alertMessage: "",
            redirect: null
        }
    }
    handleSubmit = async (event) => {
        // let alert = useAlert();
        event.preventDefault();
        let data = {
            email: event.target.Email.value,
            password: event.target.Password.value
        };
        let res = await this.userService.Login(data);
        if (res.length > 0) {
            console.log(res);
            localStorage.setItem("email", res[0].email);
            localStorage.setItem("userID", res[0].userID);
            localStorage.setItem("userTypeID", Number(res[0].userTypeID));
            localStorage.setItem("name", res[0].userName);
            this.props.alert.success("User Logged In");
            if (Number(res[0].userTypeID) === 3) {
                await this.setState({ redirect: "/home" });
            }
            else {
                await this.setState({ redirect: "/demo" });
            }
        }
        else {
            console.log(res);
            console.log("error");
            this.props.alert.error("User Not Found");
            // this.props.onShowAlert("danger", "User Not Found.");
        }
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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        // const alert = this.props.alert;
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
                        <a onClick={this.handleOpen}>Forgot password?</a>
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
                </Modal>
            </div>
        );
    }
}
export default withAlert()(Login);