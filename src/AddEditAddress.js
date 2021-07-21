import React, { Component } from 'react';
import { FormControl, InputGroup, Modal } from 'react-bootstrap';
import './AddEditAddress.scss';
import DeleteService from './services/DeleteService';
import { withAlert } from 'react-alert';
import AddressService from './services/AddressService';
class AddEditAddress extends Component {
    addressService = new AddressService();
    constructor(props) {
        super(props);
        this.state = {
            userID: Number(localStorage.getItem("userID")),
            isModalOpen: true,
            addressID: this.props.data.addressID !== undefined ? this.props.data.addressID : 0,
            addressLine: this.props.data.addressID !== undefined ? this.props.data.addressLine : "",
            city: this.props.data.addressID !== undefined ? this.props.data.city : "",
            provience: this.props.data.addressID !== undefined ? this.props.data.provience : "",
            postalCode: this.props.data.addressID !== undefined ? this.props.data.postalCode : "",
        };
    }
    componentDidMount = async () => {
        await this.setState({ isModalOpen: true });
    }
    handleOpen = async () => {
        await this.setState({ isModalOpen: true });
    };
    handleClose = async () => {
        await this.setState({ isModalOpen: false });
        this.props.handleAddEditClose(false);
    };
    valueChange = async (event) => {

        await this.setState({ [event.target.name]: event.target.value });
    }
    // handleDelete = async () => {
    //     this.deleteService.deleteItem(this.props.data.api, this.props.data.id).then(async (data) => {
    //         if (data.affectedRows != undefined) {
    //             if (data.affectedRows > 0) {
    //                 this.props.alert.success("Deleted Successfully.");
    //                 await this.setState({ isModalOpen: false });
    //                 this.props.handleAddEditClose(true);
    //             }
    //         }
    //         else {
    //             this.props.alert.error(data.message);
    //         }
    //     });
    // };
    formSubmit = async (event) => {
        event.preventDefault();
        let data = {
            "addressID": this.state.addressID,
            "addressLine": this.state.addressLine,
            "city": this.state.city,
            "provience": this.state.provience,
            "postalCode": this.state.postalCode,
            "userID": this.state.userID
        }
        if (this.state.addressID == 0) {
            this.addressService.AddAddress(data).then(async (res) => {
                if (res) {
                    if (res.affectedRows != undefined) {
                        if (res.affectedRows > 0) {
                            this.props.alert.success("Address added successfully.");
                            await this.setState({ isModalOpen: false });
                            this.props.handleAddEditClose(true);
                        }
                    }
                    else {
                        this.props.alert.error(res.message);
                    }
                }
            });
        }
        else {
            this.addressService.EditAddress(data).then(async (res) => {
                if (res) {
                    if (res.affectedRows != undefined) {
                        if (res.affectedRows > 0) {
                            this.props.alert.success("Address edited successfully.");
                            await this.setState({ isModalOpen: false });
                            this.props.handleAddEditClose(true);
                        }
                    }
                    else {
                        this.props.alert.error(res.message);
                    }
                }
            });
        }
    }
    render() {
        return (
            <div>
                <Modal
                    className="AddEditAddressPage"
                    onHide={this.handleClose}
                    show={this.state.isModalOpen}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <form onSubmit={this.formSubmit}>
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                {this.props.data.addressID == undefined || this.props.data.addressID == 0 ? <span>Add Address</span> : <span>Edit Address</span>}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <br></br>
                            {/* <h3>Log in</h3> */}
                            <div className="form-group">
                                <label>Address Line</label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type="text"
                                        required
                                        name='addressLine'
                                        placeholder="Enter Address Line"
                                        aria-label="addressLine"
                                        aria-describedby="basic-addon1"
                                        value={this.state.addressLine}
                                        onChange={this.valueChange}
                                    />
                                </InputGroup>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type="text"
                                        required
                                        name='city'
                                        placeholder="Enter city"
                                        aria-label="city"
                                        aria-describedby="basic-addon1"
                                        value={this.state.city}
                                        onChange={this.valueChange}
                                    />
                                </InputGroup>
                            </div>

                            <div className="form-group">
                                <label>Provience</label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        required
                                        type='text'
                                        name='provience'
                                        placeholder="Enter Provience"
                                        aria-label="provience"
                                        aria-describedby="basic-addon1"
                                        value={this.state.provience}
                                        onChange={this.valueChange}
                                    />
                                </InputGroup>
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        required
                                        type='text'
                                        name='postalCode'
                                        placeholder="Enter Postal Code"
                                        aria-label="postalCode"
                                        aria-describedby="basic-addon1"
                                        value={this.state.postalCode}
                                        onChange={this.valueChange}
                                    />
                                </InputGroup>
                            </div>

                            {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                            {/* <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button> */}
                            {/* <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p> */}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={this.handleClose}>Cancel</button>
                            <button className="btn btn-primary" type="submit">{this.props.data.addressID == undefined || this.props.data.addressID == 0 ? <span>Add Address</span> : <span>Edit Address</span>}</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}
export default withAlert()(AddEditAddress);