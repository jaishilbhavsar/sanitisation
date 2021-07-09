// ChargeService.js
import React from 'react';
import { APIurl } from "../config.json";
export default class ChargeService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    GetAllCharges = async () => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'charges/getAllCharges', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
}