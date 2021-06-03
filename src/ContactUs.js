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
                {/* <Image src={ } fluid /> */}
                {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F54558913%2Freact-bootstrap-navbar-toggle-not-showing&psig=AOvVaw0BXCqulDWzfHMTa2LsH2S1&ust=1621941836197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiG5ama4vACFQAAAAAdAAAAABAD' /> */}
                {/* <Card> */}
                {/* <Card.Img className="img-fluid" variant="top" src={sanitiserHomeImage} /> */}
                {/* <Card.ImgOverlay className="SanitizerImageText d-flex flex-column justify-content-botom align-items-end"> */}
                {/* <Card.Body> */}
                <Row>
                    <Col md="6">
                        <Card>
                            <Card.Body>
                                <Card.Title>Say Hi</Card.Title>
                                <Card.Text>
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

                                    <Row>

                                    </Row>
                                </Card.Text>
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
                                    &#169; - 2021-Be Wise,Sanitise. All rights reserved.
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