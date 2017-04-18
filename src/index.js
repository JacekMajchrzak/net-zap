import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {createStore, applyMiddleware} from 'redux';
import netZapApp from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

let store = createStore(netZapApp, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
