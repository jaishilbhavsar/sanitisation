import React, { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";

export default class ForgotPassword extends Component {
    constructor(props) {
        super();
        this.state = {
            isRevealPassword: false
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.Email.value);
        this.props.closePopup();
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
                            placeholder="Enter User Email"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Append>
                            <Button type="submit" className="btn btn-primary btn-raised">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>


                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
            </form>
        );
    }
}