import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Home from './Home';
import Header from './Header';
import Protected from './Protected';
import Visitor from './Visitor';

function App() {
    return (
        <div className="App">
            {/* <Login></Login> */}
            <Router>
                <Switch>
                    <Route path="/visitor" component={Visitor}></Route>
                    <Route path="/home"><Protected component={Home} /></Route>
                    <Route exact path="/" render={() => <Redirect to="/visitor" />}></Route>
                    <Route path="*" render={() => <Redirect to="/visitor" />}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
