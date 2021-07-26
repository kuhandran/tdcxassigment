import React from "react";
import { DashboardHeader } from './DashboardHeader'
// import { AddNewModal } from "./AddNewModal";
// import { TaskModal } from "./TaskModal";
import { DashboardContent } from "./DashboardContent";
import { Redirect } from 'react-router';
import store from "../../reducers/store";


class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            valid: true,
            token:[]
           
        };
    }

    componentDidMount() {
        let token = store.getState().Login.token;
        if (!token) {
            this.setState({ valid: false })
        } else{
            this.setState({token:token})
        }
    }

    componentWillMount() {
        let token = store.getState().Login.token;
        if (!token) {
            this.setState({ valid: false })
        }
    }

   
    render() {

        if (!this.state.valid) {
            return <Redirect to={"/Login"} />
        }

        return (
            <div className="Login-Container">
                <DashboardHeader />
                <DashboardContent
                    token = {this.state.token}
                />
            </div>

        );
    }
}


export { DashboardContainer };
