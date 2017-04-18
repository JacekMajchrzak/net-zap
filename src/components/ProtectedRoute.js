import {Route, Switch, Redirect} from 'react-router-dom'
import React, {Component} from 'react';
import Survey from './Survey.js';
import DataCollection from './DataCollection.js';
import Profile from './Profile.js';
import Help from './Help.js';
import MenuContainer from '../containers/MenuContainer';

class ProtectedRoute extends Component {
    render() {
        return (
            <div>
                <MenuContainer/>
                <Switch>
                    <Route path="/survey" component={Survey}/>
                    <Route path="/data" component={DataCollection}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/" component={Survey}/>
                </Switch>
            </div>
        );
    }
}

export default ProtectedRoute;