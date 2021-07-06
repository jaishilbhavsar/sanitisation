import React, { Component } from "react";
import { Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import ForgotPassword from "./ForgotPassword";
import UserService from "./services/UserService";
import { Redirect } from "react-router";
import AddressService from './services/AddressService';
import ChargeService from "./services/ChargeService";
import AppointmentService from "./services/AppointmentService";
import { withAlert } from 'react-alert';


// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
class BookAppointment extends Component {
    addressService = new AddressService();
    chargeService = new ChargeService();
    appointmentService = new AppointmentService();
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            noOfRooms: 1,
            userID: Number(localStorage.getItem("userID")),
            listOfAddresses: [],
            perRoomCharge: 0,
            baseCharge: 0,
            totalAmount: 0,
            redirect: null
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
            if (res) {
                // if (res.lenth > 0) {
                console.log("inside");
                await this.setState({ listOfAddresses: res });
                // }
            }
        });
    }
    componentDidMount = async () => {
        this.getAllUserAddresses();
        await this.getAllCharges();
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
        console.log(event.target.appointmentDate.value);
        console.log(event.target.noOfRooms.value);
        console.log(event.target.selectedAddress.value);
        let data = {
            "userID": this.state.userID,
            "addressID": event.target.selectedAddress.value,
            "appoitmentDate": event.target.appointmentDate.value + "",
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
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                    name='appointmentDate'
                                    placeholder="Select Appointment Date"
                                    aria-label="appointmentDate"
                                    aria-describedby="basic-addon1"
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
                                <select required className="form-control" name="selectedAddress">
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
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Book Appointment</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default withAlert()(BookAppointment);