import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from "./App";
import Login from "./components/login";
import Home from "./components/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
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