// AboutUs.js
import React, { Component } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './ViewProduct.scss';
import sanitiserHomeImage from './assets/images/demo.jpg';
import ProductsService from './services/ProductsService';
import { Cart, Eye } from 'react-bootstrap-icons';
import { Redirect, withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { compose } from 'redux';
import AddressService from './services/AddressService';
// import { Button } from 'bootstrap';
class ViewProduct extends Component {
    productsService = new ProductsService();
    addressService = new AddressService();
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            redirect: null,
            productID: 0,
            productDetail: null,
            selectedQuantity: 1,
            selectedAddressId: null,
            listOfAddresses: [],
            total: 0,
            userID: Number(localStorage.getItem("userID")),
        }
    }
    getAllUserAddresses = async () => {
        this.addressService.GetAllUserAddresses(this.state.userID).then(async (res) => {
            if (res.length > 0) {
                await this.setState({ listOfAddresses: res, selectedAddressId: res[0].addressID });
                // }
                console.log(this.state.selectedAddressId);
            }
        });
    }
    getProductByID = () => {
        this.productsService.GetProductById(this.state.productID).then(async (data) => {
            if (data != undefined) {
                if (data.length > 0) {
                    console.log(data);
                    await this.setState({ productDetail: data[0] });
                    this.calculateTotalAmount();
                }
            }
        });
    }
    ViewProductClick = (id) => {
        this.setState({ productID: id, redirect: "/viewproduct" });
    }
    componentDidMount = async () => {
        if (localStorage.getItem("productID") == undefined || localStorage.getItem("productID") == null) {
            this.props.alert.error("Please Select a Product first");
            this.setState({ redirect: "/products" });
        }
        else {
            await this.setState({ productID: localStorage.getItem("productID") });
            this.getProductByID();
            this.getAllUserAddresses();
        }
    }
    calculateTotalAmount = () => {
        let tot = this.state.selectedQuantity * this.state.productDetail.price;
        this.setState({ total: tot });
    }
    incrementQuantity = async () => {
        if (this.state.selectedQuantity < this.state.productDetail.quantity) {
            await this.setState({ selectedQuantity: this.state.selectedQuantity + 1 });
            this.calculateTotalAmount();
        }
        else {
            this.props.alert.info("We only have " + this.state.productDetail.quantity + " " + this.state.productDetail.productName + " left.");
        }
    }
    decrementQuantity = async () => {
        if (this.state.selectedQuantity > 1) {
            await this.setState({ selectedQuantity: this.state.selectedQuantity - 1 });
            this.calculateTotalAmount();
        }
        else {
            this.props.alert.info("Minimum 1 " + this.state.productDetail.productName + " has to be selected.");
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        let data = {
            "userID": this.state.userID,
            "productID": this.state.productID,
            "quantity": this.state.selectedQuantity,
            "addressID": this.state.selectedAddressId
        };
        console.log(data);
        this.productsService.PlaceOrder(data).then((res) => {
            console.log(res);
            if (res.affectedRows != undefined) {
                if (res.affectedRows > 0) {
                    this.props.alert.success("Your order has been received successfully.");
                    this.setState({ redirect: "/home" });
                }
                else {
                    this.props.alert.error("Something went wrong.");
                }
            }
            else {
                this.props.alert.error(res.message);
            }
        });
    }
    addressChange = (event) => {
        this.setState({ selectedAddressId: event.target.value });
        console.log(this.state.selectedAddressId);
    }
    render() {
        if (this.state.redirect != null) {
            return <Redirect to={{ pathname: this.state.redirect }} />
        }
        return (
            <div className="ViewProductPage container">
                {this.state.productDetail != null ?
                    <Row className="MainCard">
                        <Col className="imageCol">
                            <Card.Img variant="top" src={this.state.productDetail.imageURL} />
                        </Col>
                        <Col className="MoreDetails">
                            <form onSubmit={this.onSubmit}>
                                <Card className="">
                                    <Card.Title>{this.state.productDetail.productName}</Card.Title>
                                    <Card.Body>
                                        <Row>
                                            <Col className="DetailTitle">Price :</Col>
                                            <Col className="DetailValue">{this.state.productDetail.price}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="DetailTitle">Manufacturer :</Col>
                                            <Col className="DetailValue">{this.state.productDetail.manufacturerName}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="DetailTitle">Category:</Col>
                                            <Col className="DetailValue">{this.state.productDetail.categoryName}</Col>
                                        </Row>
                                        <Row>
                                            <Col className="DetailTitle">Address:</Col>
                                            <Col className="DetailValue">
                                                <InputGroup className="mb-3">
                                                    <select required className="form-control" onChange={this.addressChange} name="selectedAddress" value={this.state.selectedAddressId} >
                                                        {this.state.listOfAddresses.map((data, index) =>

                                                            <option key={index} value={data.addressID}>{data.addressLine},{data.city},{data.provience}-{data.postalCode}</option>

                                                        )}
                                                    </select>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="DetailTitle">Quantity:</Col>
                                            <Col className="DetailValue">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend onClick={this.decrementQuantity}>
                                                        <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">-</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl
                                                        type="text"
                                                        required
                                                        name='selectedQuantity'
                                                        placeholder="Select Quantity"
                                                        aria-label="selectedQuantity"
                                                        aria-describedby="basic-addon1"
                                                        value={this.state.selectedQuantity}
                                                        min="1"
                                                        max={this.state.productDetail.quantity}
                                                        onChange={this.calculateTotalAmount}
                                                    />
                                                    <InputGroup.Append onClick={this.incrementQuantity}>
                                                        <InputGroup.Text style={{ color: '#ff811b' }} id="basic-addon1">+</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col className="DetailTitle">Total:</Col>
                                            <Col className="DetailValue">{this.state.total}</Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                                <Row>
                                    <Col>
                                        <button className="btn btn-primary btn-block"><Cart /> Buy Now</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        {/* </Card> */}
                    </Row>
                    : <div><p>No Products found.</p></div>}
                {/* <Image src={ } fluid /> */}
                {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F54558913%2Freact-bootstrap-navbar-toggle-not-showing&psig=AOvVaw0BXCqulDWzfHMTa2LsH2S1&ust=1621941836197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiG5ama4vACFQAAAAAdAAAAABAD' /> */}

            </div >
        )
    }
}
export default compose(withRouter, withAlert())(ViewProduct);