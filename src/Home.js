import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import sanitiserHomeImage from './assets/images/HomeSanitising4.jpg';
import './Home.scss';

// AWS.config.update({ accessKeyId: config.access_key, secretAccessKey: config.secret_key });
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            redirect: null
        };
    }
    redirectTo = (param) => {
        this.setState({
            redirect: param
        });
    }
    componentDidMount = async () => {
        // let cred = { accessKeyId: config.access_key, secretAccessKey: config.secret_key };

        // await s3.listBuckets(res => {
        //     console.log(res);
        // });
    }
    onChangeHandler = async (event) => {
        await this.setState({
            selectedFile: event.target.files[0],
        });
        console.log(this.state.selectedFile);
    }
    onClickHandler = () => {
        let res;
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        data.append('upload_preset', 'sanitisation');
        data.append('cloud_name', 'ddoy0wmpy');
        fetch("https://api.cloudinary.com/v1_1/ddoy0wmpy/image/upload", {
            method: "post",
            body: data
        })
            .then(response => response.json())
            .then(result => { console.log(result); })
            .catch(error => { console.log(error); });

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container HomePage">
                <Row>
                    <Col>
                        <Card onClick={() => { this.redirectTo("/bookappointment") }}>
                            <Card.Img variant="top" src={sanitiserHomeImage} />
                            <Card.Body>
                                <Card.Title>+ Book An Appointment</Card.Title>
                                {/* <input type="file" name="Image Demo" onChange={this.onChangeHandler} />
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> */}
                                <Card.Text>
                                    Just select your address,home size,date and relax as we sanitize your home.
                        </Card.Text>
                                {/* <Button variant="primary">Book Now</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={sanitiserHomeImage} />
                            <Card.Body>
                                <Card.Title>View Products</Card.Title>
                                <Card.Text>
                                    Look at the wide range of products we offer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}