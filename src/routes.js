import React from 'react';
import { Route, IndexRoute, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import caseList from './components/case/caseList';
import {casePage} from './components/case/casePage';
import home from './components/home/home';
import { caseDetailPage } from './components/case/caseDetailPage';
import Router from 'react-router-dom/Router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const routes =(
  <Provider store={store}>
    <BrowserRouter>
        <Route exact path="/" component={App}/>
    </BrowserRouter>
  </Provider>
);

export default routes;