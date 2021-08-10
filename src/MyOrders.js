// myOrders.js
import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AppointmentService from './services/AppointmentService';
import './MyOrders.scss';
import DeleteItem from './DeleteItem';
import ProductsService from './services/ProductsService';

// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
export default class MyOrders extends Component {
    appointmentService = new AppointmentService();
    productService = new ProductsService();
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userID: Number(localStorage.getItem("userID")),
            myOrders: [],
            rescheduleData: {},
            deleteData: {},
            showDelete: false
        };
    }
    getAllUserOrders = async () => {
        this.productService.GetAllOrdersByUserID(this.state.userID).then(async (data) => {
            if (data) {
                await this.setState({ myOrders: data });
            }
        });
    }
    componentDidMount = async () => {
        await this.getAllUserOrders();
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
            this.getAllUserOrders();
        }
    }
    deleteOrderClick = async (data) => {
        console.log(data);
        await this.setState({
            deleteData: {
                "id": data.invoiceID,
                "api": "product/deleteOrder/",
                "title": "Delete Order",
                "subtitle": "order of" + data.productName,
            }
        });
        await this.setState({ showDelete: true });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect, state: { data: this.state.rescheduleData } }} />
        }
        return (
            <div className="container MyOrdersPage">
                {this.state.showDelete ? <DeleteItem data={this.state.deleteData} handleDeleteClose={this.handleDeleteClose} /> : null}
                {this.state.myOrders.length > 0 ?
                    this.state.myOrders.map((data) =>
                        <Row>
                            <Col>
                                <Card className="cardRows">
                                    <Card.Body>
                                        <Card.Title>{data.productName}</Card.Title>
                                        <Row>
                                            <Col className="imageCol">
                                                <Card.Img variant="top" src={data.imageURL} />
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <b>Bill Amount </b>:<p>$ {data.totalAmount}</p>
                                                    <b>Quantity</b>:<p>{data.quantity}</p>
                                                    <b>Manufacturer</b>:<p>{data.manufacturerName}</p>
                                                    <b>Category</b>:<p>{data.categoryName}</p>
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <b>Address </b>:<p>{data.addressLine}</p>
                                                    <b>City</b>:<p>{data.city}</p>
                                                    <b>Province</b>:<p>{data.provience}</p>
                                                    <b>Postcode</b>:<p>{data.postalCode}</p>
                                                </Card.Text>
                                            </Col>

                                            <Col>
                                                {data.status != 'done' ?
                                                    <div>
                                                        <button className="btn btn-danger" onClick={() => { this.deleteOrderClick(data); }}>Cancel Order</button>
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