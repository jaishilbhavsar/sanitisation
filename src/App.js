import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Protected from './Protected';
import Visitor from './Visitor';
import BookAppointment from './BookAppointment';
import MyAppointments from './MyAppointments';
import MyAddresses from './MyAddresses';
import Products from './Products';
import ViewProduct from './ViewProduct';
import MyOrders from './MyOrders';

function App() {
    return (
        <div className="App">
            {/* <Login></Login> */}
            <Router>
                <Switch>
                    <Route path="/visitor" component={Visitor}></Route>
                    <Route path="/home"><Protected isAdminRoute={false} component={Home} /></Route>
                    <Route path="/bookappointment"><Protected isAdminRoute={false} component={BookAppointment} /></Route>
                    <Route path="/myappointments"><Protected isAdminRoute={false} component={MyAppointments} /></Route>
                    <Route path="/myaddresses"><Protected isAdminRoute={false} component={MyAddresses} /></Route>
                    <Route path="/myorders"><Protected isAdminRoute={false} component={MyOrders} /></Route>
                    <Route path="/products"><Protected isAdminRoute={false} component={Products} /></Route>
                    <Route path="/viewproduct"><Protected isAdminRoute={false} component={ViewProduct} /></Route>
                    <Route path="/demo"><Protected isAdminRoute={true} component={Home} /></Route>
                    <Route exact path="/" render={() => <Redirect to="/visitor" />}></Route>
                    <Route path="*" render={() => <Redirect to="/visitor" />}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
