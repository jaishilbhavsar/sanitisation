// AboutUs.js
import React, { Component } from 'react';
import { Accordion, Card, } from 'react-bootstrap';
import './FAQ.scss';
import FAQService from './services/FAQService';
// import sanitiserHomeImage from './assets/images/sanitiserHome.jpg';
export default class FAQ extends Component {
    faqService = new FAQService();
    constructor(props) {
        super(props);
        this.state = {
            FAQList: []
        }
    }
    componentDidMount() {
        this.faqService.getAllActiveFAQ().then(async (data) => {
            await this.setState({ FAQList: data });
            console.log(this.state.FAQList);
        });
    }
    render() {
        // const { classes } = this.props;
        return (
            <div className="FAQPage">
                <Card>
                    <Card.Title>Frequently Asked Questions (FAQ):</Card.Title>
                    <br />
                    <Accordion>
                        {this.state.FAQList.map((item) => {
                            return (<Card key={item.faqID}>
                                <Accordion.Toggle as={Card.Header} eventKey={item.faqID}>
                                    {item.question}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={item.faqID}>
                                    <Card.Body>{item.answer}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            )
                        })}
                        {/* <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Should I clean my house before sanitization starts ?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Yes, you must remove all the dirt, dust and debris from your floors and other surfaces before you can start the sanitizing process. If the surfaces are not clean, the sanitizing job may not have the desired impact. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                What areas of the house should I get sanitized?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>You need to identify the most touched surfaces and areas of your house for disinfection or sanitization. These may include door handles, windows, kitchen counters, cooking area, bathroom surfaces, faucets, switches, etc.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                How long does it take to sanitize a home?
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>It usually takes about 2-3 hours to effectively sanitize a home. However, if you wish to know the exact details, please call the professionals for a personalized consultation.</Card.Body>
                            </Accordion.Collapse>
                        </Card> */}
                    </Accordion>
                </Card>
            </div >
        )
    }
}