import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            isRevealPassword: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.Email.value);
        console.log(event.target.Password.value);
    }
    showHidePassword = async () => {
        await this.setState({ isRevealPassword: !this.state.isRevealPassword });
    }
    render() {
        return (
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
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
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
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append onClick={this.showHidePassword}>
                            <InputGroup.Text id="basic-addon1">
                                {
                                    this.state.isRevealPassword ?
                                        <EyeFill size={20} />
                                        :
                                        <EyeSlashFill size={20} />
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

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}