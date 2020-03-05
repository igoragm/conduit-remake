import React from "react";
import "./App.scss";
import Header from "./Components/Modules/Header/Header";
import { Switch, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Article from "Pages/Article/Article";

function App() {
    return (
        <div id="app">
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/article/:id" component={Article} />
            </Switch>
        </div>
    );
}

export default App;
