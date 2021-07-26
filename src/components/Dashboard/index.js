import React from "react";
import { DashboardHeader } from './DashboardHeader';
import { DashboardContent } from "./DashboardContent";
import { Redirect } from 'react-router';
import store from "../../reducers/store";

/*
Date: 24/07/2021
Developer : Kuhandran
Purpose:
- Update the login container application
- { componentDidMount } check the store for token and navigate
- { DashboardContent } load the relevent content
*/




class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            valid: true,
            token: []

        };
    }

    componentDidMount() {
        let token = store.getState() &&
            store.getState().Login &&
            store.getState().Login.token &&
            store.getState().Login.token.token;

        if (!token) {
            this.setState({ valid: false })
        } else {
            console.log(token, 'token');
            this.setState({ token: token })
        }
    }

    // componentWillMount() {
    //     let token = store.getState().Login.token;
    //     if (!token) {
    //         this.setState({ valid: false })
    //     }
    // }


    render() {

        let tokenLength = this.state.token

        if (!this.state.valid) {
            return <Redirect to={"/Login"} />
        }

        return (
            <div className="Login-Container">
                {tokenLength.length > 0 && <div>
                    <DashboardHeader />
                    <DashboardContent
                        token={this.state.token}
                    />
                </div>
                }
            </div>

        );
    }
}


export { DashboardContainer };
