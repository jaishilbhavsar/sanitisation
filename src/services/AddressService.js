import React from 'react';
import { APIurl } from "../config.json";
export default class AddressService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    GetAllUserAddresses = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'address/getAddressByUserID/' + data, requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    Signup = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch(url + 'user/signup', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }

}