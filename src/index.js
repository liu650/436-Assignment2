import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import r from './reducers'; //we exported combineReducer

ReactDOM.render( 
    <React.StrictMode >
      <Provider store = { createStore(r,applyMiddleware(thunk))} >
          <App/>
      </Provider>,  
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();