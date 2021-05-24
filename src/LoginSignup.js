// import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Login from './Login';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
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
                    <Tab eventKey="profile" title="Profile">
                        <p>Profile</p>
                    </Tab>
                </Tabs>
                {/* <Paper square>
                    <Tabs
                        value={this.state.currentTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleTabChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Login" >
                            <div>
                                Login
                            </div>
                        </Tab>
                        <Tab label="SignUp"></Tab>
                    </Tabs> */}
                {/* <TabPanel value={this.state.currentTab} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={this.state.currentTab} index={1}>
                        Item Two
                    </TabPanel> */}
                {/* </Paper> */}
            </div>
        )
    }
}