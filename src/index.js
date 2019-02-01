import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from './redux/store';
import {getUser} from './redux/actions/';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


if(localStorage.Auth) {
    //store.dispatch ({type: 'SET_USER', user: JSON.parse(localStorage.Auth)});

    var _id = JSON.parse(localStorage.Auth)._id;
    getUser(_id)
        .then((res) => {
            store.dispatch({type: 'SET_USER', user:res})
         })
}

ReactDOM.render((
    <Provider store = {store}>
        <ConnectedRouter history= {history}>
            <Switch>
                <Route path='/' component ={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>),
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
