import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Protected from './Protected';
import Visitor from './Visitor';
import BookAppointment from './BookAppointment';

function App() {
    return (
        <div className="App">
            {/* <Login></Login> */}
            <Router>
                <Switch>
                    <Route path="/visitor" component={Visitor}></Route>
                    <Route path="/home"><Protected isAdminRoute={false} component={Home} /></Route>
                    <Route path="/bookappointment"><Protected isAdminRoute={false} component={BookAppointment} /></Route>
                    <Route path="/demo"><Protected isAdminRoute={true} component={Home} /></Route>
                    <Route exact path="/" render={() => <Redirect to="/visitor" />}></Route>
                    <Route path="*" render={() => <Redirect to="/visitor" />}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
