// UserService.js
// AboutUs.js
import React from 'react';
import { APIurl } from "../config.json";
export default class FAQService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getAllActiveFAQ = async (data) => {
        let res;
        let url = APIurl.URL;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch(url + 'faq/getAllActiveFaq', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; });
        return res;
    }

}