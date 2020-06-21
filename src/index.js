import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainLayout from './components/MainLayout';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainLayout} />
        <Route path="hero/{id}" />

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
