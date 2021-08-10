import React from 'react';
import { APIurl } from "../config.json";
export default class ProductsService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    GetAllProducts = async () => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'product/getAllProducts/', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    GetProductById = async (id) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'product/getAllProductsByProductId/' + id, requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    PlaceOrder = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch(url + 'product/placeOrder/', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    GetAllOrdersByUserID = async (id) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'product/getAllInvoicesByUserID/' + id, requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    AddAddress = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch(url + 'address/InsertAddress', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    EditAddress = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch(url + 'address/EditAddress', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }

}