import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Redirect, withRouter } from "react-router";
import AddressService from './services/AddressService';
import ChargeService from "./services/ChargeService";
import AppointmentService from "./services/AppointmentService";
import { withAlert } from 'react-alert';
import { compose } from "redux";


// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
class BookAppointment extends Component {
    addressService = new AddressService();
    chargeService = new ChargeService();
    appointmentService = new AppointmentService();
    constructor(props) {
        super(props);
        this.state = {
            noOfRooms: props.location == undefined || props.location == null || props.location.state == undefined ? 1 : props.location.state.data.noOfRooms,
            userID: Number(localStorage.getItem("userID")),
            listOfAddresses: [],
            perRoomCharge: 0,
            baseCharge: 0,
            totalAmount: 0,
            redirect: null,
            minDate: props.location == undefined || props.location == null || props.location.state == undefined ? new Date().toISOString().split("T")[0] : new Date(props.location.state.data.selectedDate).toISOString().split("T")[0],
            selectedDate: props.location == undefined || props.location == null || props.location.state == undefined ? new Date().toISOString().split("T")[0] : new Date(props.location.state.data.selectedDate).toISOString().split("T")[0],
            selectedAddressId: props.location == undefined || props.location == null || props.location.state == undefined ? 0 : props.location.state.data.selectedAddressId,
            appointmentID: props.location == undefined || props.location == null || props.location.state == undefined ? 0 : props.location.state.data.appointmentID
        };
    }
    getAllCharges = async () => {
        this.chargeService.GetAllCharges().then(async (res) => {
            if (res) {
                await this.setState({ perRoomCharge: res[0].perRoomCharge, baseCharge: res[0].baseCharge });
                console.log(this.state.perRoomCharge, this.state.baseCharge);
                this.calculateTotalAmount();
            }
        });
    }
    calculateTotalAmount = () => {
        let total = (this.state.noOfRooms * this.state.perRoomCharge) + this.state.baseCharge;
        this.setState({ totalAmount: total });
    };
    getAllUserAddresses = async () => {
        this.addressService.GetAllUserAddresses(this.state.userID).then(async (res) => {
            if (res.length > 0) {
                // if (res.lenth > 0) {
                console.log(res);
                if (this.state.appointmentID == 0) {
                    await this.setState({ listOfAddresses: res, selectedAddressId: res[0].addressID });
                }
                else {
                    await this.setState({ listOfAddresses: res });
                }
                // }
            }
        });
    }
    componentDidMount = async () => {
        this.getAllUserAddresses();
        await this.getAllCharges();
    }
    dateChange = async (event) => {
        console.log(event.target.value);
        await this.setState({ selectedDate: event.target.value })
    }
    addressChange = async (event) => {
        console.log(event.target.value);
        this.setState({ selectedAddressId: event.target.value });
    }
    incrementRoom = async () => {
        await this.setState({
            noOfRooms: this.state.noOfRooms + 1
        });
        this.calculateTotalAmount();
    }
    decrementRoom = async () => {
        if (this.state.noOfRooms > 1) {
            await this.setState({
                noOfRooms: this.state.noOfRooms - 1
            });
            this.calculateTotalAmount();
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.state.appointmentID == 0) {
            console.log(this.state.selectedAddressId);
            console.log(this.state.selectedDate);
            console.log(this.state.noOfRooms);
            let data = {
                "userID": this.state.userID,
                "addressID": this.state.selectedAddressId,
                "appoitmentDate": this.state.selectedDate + "",
                "noOfRooms": this.state.noOfRooms
            };
            this.appointmentService.BookAppointment(data).then((res) => {
                if (res.affectedRows > 0) {
                    this.props.alert.success("Appointment booked successfully.");
                    this.setState({ redirect: "/home" });
                }
                else {
                    this.props.alert.error("Something went wrong please try again.");
                }
            });
        }
        else {
            let data = {
                "userID": this.state.userID,
                "addressID": this.state.selectedAddressId,
                "appoitmentDate": this.state.selectedDate + "",
                "noOfRooms": this.state.noOfRooms,
                "appointmentID": this.state.appointmentID
            };
            this.appointmentService.EditAppointment(data).then((res) => {
                if (res.affectedRows > 0) {
                    this.props.alert.success("Appointment edited successfully.");
                    this.setState({ redirect: "/myappointments" });
                }
                else {
                    this.props.alert.error("Something went wrong please try again.");
                }
            });
        }
    };
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <br></br>
                        <div className="form-group">
                            <label>Appointment Date</label>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type="date"
                                    min={this.state.minDate}
                                    required
                                    name='appointmentDate'
                                    placeholder="Select Appointment Date"
                                    aria-label="appointmentDate"
                                    aria-describedby="basic-addon1"
                                    value={this.state.selectedDate}
                                    onChange={this.dateChange}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <label>No Of Rooms</label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend onClick={this.decrementRoom}>
                                    <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">-</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="text"
                                    required
                                    name='noOfRooms'
                                    placeholder="Enter User Email"
                                    aria-label="noOfRooms"
                                    aria-describedby="basic-addon1"
                                    value={this.state.noOfRooms}
                                    min="1"
                                    onChange={this.calculateTotalAmount}
                                />
                                <InputGroup.Append onClick={this.incrementRoom}>
                                    <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">+</InputGroup.Text>
                                </InputGroup.Append>

                            </InputGroup>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <InputGroup className="mb-3">
                                <select required className="form-control" onChange={this.addressChange} name="selectedAddress" value={this.state.selectedAddressId} >
                                    {this.state.listOfAddresses.map((data, index) =>

                                        <option value={data.addressID}>{data.addressLine},{data.city},{data.provience}-{data.postalCode}</option>

                                    )}
                                </select>
                                <InputGroup.Append>
                                    <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">+</InputGroup.Text>
                                </InputGroup.Append>

                            </InputGroup>
                        </div>

                        <div className="form-group">
                            <label>Total Amount : $ {this.state.totalAmount}</label>
                        </div>
                        {this.state.appointmentID == 0 ?
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Book Appointment</button>
                            :
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Edit Appointment</button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}
export default compose(withRouter, withAlert())(BookAppointment);