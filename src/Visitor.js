import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import VisitorHeader from './VisitorHeader';
import './Visitor.scss';
import sanitiserHomeImage from './assets/images/HomeSanitising4.jpg';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import HowItWorks from './HowItWorks';
export default class Visitor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        // const { classes } = this.props;
        return (
            <div className="visitorPage">
                <div style={{ position: 'sticky', top: '0', zIndex: 10 }}>
                    {/* <Sticky topOffset={20}> */}
                    <VisitorHeader />
                    {/* </Sticky> */}
                </div>
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
                <div style={{ marginTop: '10px' }}>
                    <HowItWorks />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <FAQ />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <AboutUs />
                </div>
                <div style={{ marginTop: '10px' }}>
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