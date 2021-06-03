// AboutUs.js
import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AboutUs.scss';
export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div className="AboutusPage">
                {/* <Image src={ } fluid /> */}
                {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F54558913%2Freact-bootstrap-navbar-toggle-not-showing&psig=AOvVaw0BXCqulDWzfHMTa2LsH2S1&ust=1621941836197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiG5ama4vACFQAAAAAdAAAAABAD' /> */}
                <Card>
                    {/* <Card.Img className="img-fluid" variant="top" src={sanitiserHomeImage} /> */}
                    {/* <Card.ImgOverlay className="SanitizerImageText d-flex flex-column justify-content-botom align-items-end"> */}
                    <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <Card.Text>Be Wise,Sanitize.- was launched in 2021. During covid-19 when everyone is advised to stay at Home, we wanted to make sure that every Home is safe. To do so each and every home needs to be fully sanitized. A group of students from Conestoga College came up with the idea that enables a person to book an appointment online to get their Home sanitized by profesional. </Card.Text>
                        <Row>
                            <Col md="4">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Trusted Service Partners</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            Choose from a wide range of tailor-made packages from our trusted service partners for a perfect at-home service experience.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Assured Delivery</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            We make sure you get the service you need, when you need it. So say goodbye to unwanted delays and last-minute cancellations.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="4">
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Value for Money</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            What you see is what you get, always. No hidden charges or extra costs. Plus you can also avail exciting offers available exclusively with us.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* <Card.Text className="">
                            A small drop that can save your life.
                        </Card.Text> */}
                    </Card.Body>
                    {/* </Card.ImgOverlay> */}
                </Card>
            </div >
        )
    }
}