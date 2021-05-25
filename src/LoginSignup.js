// import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
export default class LoginSignup extends Component {
    constructor(props) {
        super();
        this.state = {
            currentTab: 0
        }
    }
    handleTabChange = async (event, newValue) => {
        await this.setState({ currentTab: newValue });
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example">
                    <Tab eventKey="Login" title="Login">
                        <Login />
                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">
                        <Signup />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}