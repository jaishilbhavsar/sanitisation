// AboutUs.js
import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './HowItWorks.scss';
import sanitiserHomeImage from './assets/images/demo.jpg';
import step1 from './assets/images/signup.png';
// import step2 from './assets/images/Choose.jpg';
// import step2 from './assets/images/Select.png';
import step2 from './assets/images/Selection3.png';
// import step2 from './assets/images/Select2.jpg';
import step3 from './assets/images/Location.png';
import step4 from './assets/images/Relax.jpg';
export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div className="HowItWorksPage">
                {/* <Image src={ } fluid /> */}
                {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F54558913%2Freact-bootstrap-navbar-toggle-not-showing&psig=AOvVaw0BXCqulDWzfHMTa2LsH2S1&ust=1621941836197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiG5ama4vACFQAAAAAdAAAAABAD' /> */}
                <Card>
                    {/* <Card.Img className="img-fluid" variant="top" src={sanitiserHomeImage} /> */}
                    {/* <Card.ImgOverlay className="SanitizerImageText d-flex flex-column justify-content-botom align-items-end"> */}
                    <Card.Body>
                        <Card.Title>How It Works</Card.Title>
                        <Row>
                            <Col md="3">
                                <Card>
                                    <Card.Img variant="top" src={step1} />
                                    <Card.Body>
                                        <Card.Title>1.Register</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                    <Card.Img variant="top" src={step2} />
                                    <Card.Body>
                                        <Card.Title>2.Select Package</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md="3">
                                <Card>
                                    <Card.Img variant="top" src={step3} />
                                    <Card.Body>
                                        <Card.Title>3.Select Address</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="3">
                                <Card>
                                    <Card.Img variant="top" src={step4} />
                                    <Card.Body>
                                        <Card.Title>4.Hassle free service</Card.Title>
                                        {/* <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button> */}
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