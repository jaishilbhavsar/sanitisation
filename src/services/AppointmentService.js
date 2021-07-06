// AppointmentService.js
// UserService.js
// AboutUs.js
import React from 'react';
import { APIurl } from "../config.json";
export default class AppointmentService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    BookAppointment = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch(url + 'appointment/bookappointment', requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
    GetAllAppointmentsByUserId = async (data) => {
        let url = APIurl.URL;
        let res;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        await fetch(url + 'appointment/getAllUserAppointments/' + data, requestOptions)
            .then(response => response.json())
            .then(result => { res = result; })
            .catch(error => { res = false });
        return res;
    }
}