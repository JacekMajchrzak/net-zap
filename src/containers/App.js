import React, {Component} from 'react';
import '../App.css';
import LoginContainer from './LoginContainer.js'
import ProtectedRoute from '../components/ProtectedRoute.js';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {

    render() {
        this.props.onInitAuth(this.props.isAuthenticated);
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/" render={() => (
                        this.props.isAuthenticated ? (
                                <ProtectedRoute/>
                            ) : (
                                <Switch>
                                    <Route path='/login' component={LoginContainer}/>
                                    <Redirect from="/" to="/login"/>
                                </Switch>
                            )
                    )}/>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
