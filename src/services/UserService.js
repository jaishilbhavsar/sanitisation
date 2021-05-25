// UserService.js
// AboutUs.js
import React from 'react';
import { APIurl } from "../config.json";
export default class UserService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    Login = async (data) => {
        let url = APIurl.URL;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(url + 'user/login', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
            });
    }

}