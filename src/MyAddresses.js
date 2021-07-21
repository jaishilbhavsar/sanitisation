// myAddresses.js
import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import AppointmentService from './services/AppointmentService';
import './MyAddresses.scss';
import DeleteItem from './DeleteItem';
import AddressService from './services/AddressService';
import AddEditAddress from './AddEditAddress';

// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
export default class MyAddresses extends Component {
    addressService = new AddressService();
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
            userID: Number(localStorage.getItem("userID")),
            myAddresses: [],
            addressData: {},
            deleteData: {},
            showDelete: false,
            showAddEdit: false,
        };
    }
    getAllUserAddresses = async () => {
        this.addressService.GetAllUserAddresses(this.state.userID).then(async (data) => {
            if (data) {
                await this.setState({ myAddresses: data });
            }
        });
    }
    componentDidMount = async () => {
        await this.getAllUserAddresses();
    }
    addAddressClick = async () => {
        await this.setState({
            addressData: {
            },
            showAddEdit: true
        });
    }
    editAddressClick = async (data) => {
        await this.setState({
            addressData: {
                "addressID": data.addressID,
                "addressLine": data.addressLine,
                "city": data.city,
                "provience": data.provience,
                "postalCode": data.postalCode,
            },
            showAddEdit: true
        });
    }
    handleAddEditClose = async (isRefresh) => {
        await this.setState({ showAddEdit: false });
        if (isRefresh) {
            this.getAllUserAddresses();
        }
    }
    handleDeleteClose = async (isRefresh) => {
        await this.setState({ showDelete: false });
        if (isRefresh) {
            this.getAllUserAddresses();
        }
    }
    deleteAddressClick = async (data) => {
        console.log(data);
        await this.setState({
            deleteData: {
                "id": data.addressID,
                "api": "address/deleteAddress/",
                "title": "Delete Address",
                "subtitle": "address: " + data.addressLine + ", " + data.city + ", " + data.provience + ", " + data.postalCode,
            }
        });
        await this.setState({ showDelete: true });
    }
    render() {
        if (this.state.redirect) {

        }
        return (
            <div className="container MyAddressesPage">
                {this.state.showDelete ? <DeleteItem data={this.state.deleteData} handleDeleteClose={this.handleDeleteClose} /> : null}
                {this.state.showAddEdit ? <AddEditAddress data={this.state.addressData} handleAddEditClose={this.handleAddEditClose} /> : null}
                <br></br>
                <Row>
                    <Col md="3" className="text-left">
                        <button className="btn btn-raised btn-primary" onClick={this.addAddressClick}>+ Add Address</button>
                    </Col>
                </Row>
                {this.state.myAddresses.length > 0 ?
                    this.state.myAddresses.map((data, key) =>
                        <Row key={key}>
                            <Col>
                                <Card className="cardRows">
                                    <Card.Body>
                                        <Card.Title>Address #{key + 1}</Card.Title>
                                        <Row>
                                            <Col>
                                                <Card.Text>
                                                    <b>Address </b>:<p>{data.addressLine}</p>
                                                    <b>Province</b>:<p>{data.provience}</p>
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <b>City</b>:<p>{data.city}</p>
                                                    <b>Postcode</b>:<p>{data.postalCode}</p>
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                {data.status != 'done' ?
                                                    <div>
                                                        <button className="btn btn-primary" onClick={() => (this.editAddressClick(data))}>Edit Address</button>
                                                        <br></br>
                                                        <br></br>
                                                        <button className="btn btn-danger" onClick={() => { this.deleteAddressClick(data); }}>Delete Address</button>
                                                    </div>
                                                    : null}
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                    : <div>No Addresses</div>}
            </div>
        )
    }
}