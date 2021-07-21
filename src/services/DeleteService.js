import React from 'react';
import { APIurl } from "../config.json";
export default class DeleteService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    deleteItem = async (api, id) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + api + id, requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
}