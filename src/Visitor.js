import React, { Component } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import LoginSignup from './LoginSignup';
import { Image } from "react-bootstrap";
import VisitorHeader from './VisitorHeader';
import './Visitor.scss';
import sanitiserHomeImage from './assets/images/sanitiserHome.jpg';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
export default class Visitor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div>
                <VisitorHeader />
                <Card>
                    <Card.Img className="img-fluid" variant="top" src={sanitiserHomeImage} />
                    <Card.ImgOverlay className="SanitizerImageText d-flex flex-column justify-content-botom align-items-end">
                        <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                            <Card.Text className="">
                                A small drop that can save your life.
                                {/* <Button className="btn-primary">demo</Button> */}
                            </Card.Text>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
                {/* <br /> */}
                <div style={{ marginTop: '2px' }}>
                    <AboutUs />
                </div>
                <div style={{ marginTop: '2px' }}>
                    <ContactUs />
                </div>
            </div >
        )
    }
}
// const useStyles = (theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '1px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// });