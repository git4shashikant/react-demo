import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import GraphicalCalculator from "./components/GraphicalCalculator";
import Calculator from "./components/Calculator";
import {BrowserRouter, Route} from "react-router-dom";
import Form from "./components/Form";
import IncrementButton from "./components/IncrementButton";
import AppContainer from "./components/reduxsupport/counter/Counter";
import toggleContainer from "./components/reduxsupport/toggle/Toggle";

import {Provider} from "react-redux";
import {store} from "./components/reduxsupport/Store";

ReactDOM.render(
    <Provider store={store}>
            <BrowserRouter>
                <Route exact path='/' component={App}/>
                <Route exact path='/button/increment' component={IncrementButton}/>
                <Route exact path='/calculator' component={Calculator}/>
                <Route exact path='/calculator/graphical' component={GraphicalCalculator}/>
                <Route exact path='/form' component={Form}/>
                <Route exact path='/react-redux' component={AppContainer}/>
                <Route exact path='/react-redux-toggle' component={toggleContainer}/>
            </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
