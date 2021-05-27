import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';

function Protected(props) {
    const Component = props.component;
    let data = localStorage.getItem("email");
    return <div>{data !== null && data !== undefined ? <div><Header /> <Component /> </div> : <Redirect to="/visitor" />}</div>;

}
export default Protected;