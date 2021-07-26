import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import history from "../../history";

import { LoginContainer } from '../../components/Login/loginContainer';
import { DashboardContainer } from "../../components/Dashboard";

/*
Date: 24/07/2021
Developer : Kuhandran
Purpose: 
- LoginContainer is for Login page
- DashboardContainer is for Dashbaord Component
- history is defined to make it easuer to redirect
*/


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



