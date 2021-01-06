import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {createStore,applyMiddleware} from "redux"
import reducer from "./Components/StateManagement/Reducer"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {createStore(reducer,applyMiddleware(thunk))}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
