// ContactUs.js
// AboutUs.js
import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin, Twitter, Mailbox2 } from 'react-bootstrap-icons';
import './ContactUs.scss';
export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div className="ContactUsPage">
                <Row>
                    <Col md="6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Say Hi</Card.Title>
                                {/* <Card.Text> */}
                                <Row>
                                    <Col md="3">
                                        <Card.Link href="https://www.facebook.com" target="_blank">
                                            <Facebook />
                                        </Card.Link>
                                    </Col>
                                    <Col md="2">
                                        <Card.Link href="https://www.twitter.com" target="_blank">
                                            <Twitter />
                                        </Card.Link>
                                    </Col>
                                    <Col md="2">
                                        <Card.Link href="https://www.linkedin.com" target="_blank">
                                            <Linkedin />
                                        </Card.Link>
                                    </Col>
                                    <Col md="2">
                                        <Card.Link href="https://www.instagram.com" target="_blank">
                                            <Instagram />
                                        </Card.Link>
                                    </Col>
                                    <Col md="3">
                                        <Card.Link href="mailto:jaishil.bhavsar20@gmail.com" target="_blank">
                                            <Mailbox2 />
                                        </Card.Link>
                                    </Col>
                                </Row>
                                {/* </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md="6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Don't Copy us</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                    <Card.Link>Privacy Policy</Card.Link>
                                    <br></br>
                                    &#169; - 2021-Be Wise,Sanitize. All rights reserved.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <Card.Text className="">
                            A small drop that can save your life.
                        </Card.Text> */}
                {/* </Card.Body> */}
                {/* </Card.ImgOverlay> */}
                {/* </Card> */}
            </div >
        )
    }
}