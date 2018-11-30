import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'


import App from "./App";
import Login from "./components/login";
import Home from "./components/home";

const rootElement = document.getElementById("root");
const newHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={newHistory}>
        <Provider store={store}>
            <App>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </App>
        </Provider>
    </Router>,
    rootElement
);