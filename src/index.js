import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Login from "./components/login";
import Home from "./components/home";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    rootElement
);
