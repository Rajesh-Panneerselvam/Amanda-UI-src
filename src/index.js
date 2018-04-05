import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadCases} from './actions/caseAction';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js/dist/popper.js';
import './css/home.css'


const store = configureStore();
store.dispatch(loadCases());

ReactDOM.render(routes, document.getElementById('root'));