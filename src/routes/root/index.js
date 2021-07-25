import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import history from "../../history";

import { LoginContainer } from '../../components/Login/loginContainer';
import { DashboardContainer } from "../../components/Dashboard";




export function Root() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/Dashboard" component={DashboardContainer} />
                <Route path="/Login" component={LoginContainer} />
                <Route path="/" exact component={LoginContainer} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
}



