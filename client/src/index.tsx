import ReactDOM from "react-dom";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,

    document.getElementById("root") || document.createElement("div")
);
