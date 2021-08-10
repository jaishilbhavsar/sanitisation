// AboutUs.js
import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Products.scss';
import sanitiserHomeImage from './assets/images/demo.jpg';
import ProductsService from './services/ProductsService';
import { Cart, Eye } from 'react-bootstrap-icons';
import { Redirect } from 'react-router';
// import { Button } from 'bootstrap';
export default class Products extends Component {
    productsService = new ProductsService();
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            redirect: null,
            productID: null
        }
    }
    getAllProducts = () => {
        this.productsService.GetAllProducts().then(async (data) => {

            if (data != undefined) {
                if (data.length > 0) {
                    console.log(data);
                    await this.setState({ products: data });
                }
            }
        });
    }
    ViewProductClick = (id) => {
        localStorage.setItem("productID", id);
        this.setState({ redirect: "/viewproduct" });
    }
    componentDidMount = () => {
        this.getAllProducts();
    }
    render() {
        if (this.state.redirect != null) {
            return <Redirect to={{ pathname: this.state.redirect }} />
        }
        // const { classes } = this.props;
        return (
            <div className="ProductsPage container">
                {this.state.products.length > 0 ?
                    <Row>{
                        this.state.products.map((item, key) =>
                            <Col md="4">
                                <Card>
                                    <Card.Img variant="top" src={item.imageURL} />
                                    <Card.Body>
                                        <Row>
                                            <Col className="ProductTitle">{item.productName}</Col>
                                            <Col className="priceTag"><span className="dollarTag">$</span>{item.price}</Col>
                                            {/* <Col className="priceTag"><Cart /></Col> */}
                                        </Row>
                                        <Row>
                                            <Col>
                                                <button className="btn btn-primary btn-block" onClick={() => { this.ViewProductClick(item.productID); }}><Eye /> View Product</button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                    </Row>
                    : <div><p>No Products found.</p></div>}
                {/* <Image src={ } fluid /> */}
                {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F54558913%2Freact-bootstrap-navbar-toggle-not-showing&psig=AOvVaw0BXCqulDWzfHMTa2LsH2S1&ust=1621941836197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiG5ama4vACFQAAAAAdAAAAABAD' /> */}

            </div >
        )
    }
}