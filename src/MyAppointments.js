// MyAppointments.js
import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AppointmentService from './services/AppointmentService';
import './MyAppointments.scss';
import DeleteItem from './DeleteItem';

// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
export default class MyAppointments extends Component {
    appointmentService = new AppointmentService();
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userID: Number(localStorage.getItem("userID")),
            myAppointments: [],
            rescheduleData: {},
            deleteData: {},
            showDelete: false
        };
    }
    getAllUserAppointments = async () => {
        this.appointmentService.GetAllAppointmentsByUserId(this.state.userID).then(async (data) => {
            if (data) {
                await this.setState({ myAppointments: data });
            }
        });
    }
    componentDidMount = async () => {
        await this.getAllUserAppointments();
    }
    rescheduleAppointmentClick = async (data) => {
        console.log(data);
        await this.setState({
            rescheduleData: {
                "noOfRooms": data.noOfRooms,
                "selectedDate": data.appoitmentDate,
                "selectedAddressId": data.addressID,
                "appointmentID": data.appointmentID
            }
        });
        await this.setState({ redirect: "/bookappointment" });
    }
    handleDeleteClose = async (isRefresh) => {
        await this.setState({ showDelete: false });
        if (isRefresh) {
            this.getAllUserAppointments();
        }
    }
    deleteAppointmentClick = async (data) => {
        console.log(data);
        await this.setState({
            deleteData: {
                "id": data.appointmentID,
                "api": "appointment/deleteappointment/",
                "title": "Delete Appointment",
                "subtitle": "appointment on " + data.appoitmentDate,
            }
        });
        await this.setState({ showDelete: true });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect, state: { data: this.state.rescheduleData } }} />
        }
        return (
            <div className="container MyAppointmentPage">
                {this.state.showDelete ? <DeleteItem data={this.state.deleteData} handleDeleteClose={this.handleDeleteClose} /> : null}
                {this.state.myAppointments.length > 0 ?
                    this.state.myAppointments.map((data,) =>
                        <Row>
                            <Col>
                                <Card className="cardRows">
                                    <Card.Body>
                                        <Card.Title>{data.appoitmentDate}</Card.Title>
                                        <Row>
                                            <Col>
                                                <Card.Text>
                                                    <b>Address </b>:<p>{data.addressLine}</p>
                                                    <b>City</b>:<p>{data.city}</p>
                                                    <b>Province</b>:<p>{data.provience}</p>
                                                    <b>Postcode</b>:<p>{data.postalCode}</p>
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <b>Number Of Rooms</b>:<p>{data.noOfRooms}</p>
                                                    <b>Amount</b>: <p>$ {data.amount}</p>
                                                    <b>Status</b>:<p>{data.status}</p>

                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                {data.status != 'done' ?
                                                    <div>
                                                        <button className="btn btn-primary" onClick={() => (this.rescheduleAppointmentClick(data))}>Reschedule Appointment</button>
                                                        <br></br>
                                                        <br></br>
                                                        <button className="btn btn-danger" onClick={() => { this.deleteAppointmentClick(data); }}>Cancel Appointment</button>
                                                    </div>
                                                    : null}
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                    : <div>No Apppintments</div>}
            </div>
        )
    }
}