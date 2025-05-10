import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/" exact>
                    <h1>Welcome to Our Website</h1>
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));