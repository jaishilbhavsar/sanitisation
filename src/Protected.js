import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function Protected(props) {
    const Component = props.component;
    let data = localStorage.getItem("email");
    let userTypeId = Number(localStorage.getItem("userTypeID"));
    return <div>
        {
            data !== null && data !== undefined ?
                userTypeId !== 3 && props.isAdminRoute === true ?
                    <div><Header /><div className="d-flex flex-row"><Sidebar /> <Component /></div> </div> :
                    userTypeId === 3 && props.isAdminRoute === true ?
                        <div> <Redirect to="/home" /></div>
                        : <div><Header /><Component /> </div>
                : <Redirect to="/visitor" />
        }
    </div>;

}
export default Protected;