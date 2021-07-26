import React from "react";
import './DashboardHeader.css';
import { Redirect } from 'react-router';
import profile from '../../../assets/img/profiles/profile.png';

/*
Date: 24/07/2021
Developer : Kuhandran
Purpose:
-  Display navigation bar
- { Logout } update the state with id 
- { onUpdateNameInformation } update the state with name
*/


export class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggout: false
        };
    }

    Logout = () =>{
        this.setState({isLoggout:true})
    }

    render() {
        if (this.state.isLoggout) {
            return <Redirect to={"/Login"} />
        }

        return (
            <nav className={`${"navbar fixed-top navbar-light bg-white"} ${"Dashboard-Header"}`} >
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={profile} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        {this.state.name}
                    </a>
                    <div className={`${"Dashboard-Header-btn"} ${"d-flex"}`}  onClick={this.Logout}>
                        <span className="Dashboard-LogoutButton" >Logout</span>
                    </div>
                </div>
            </nav>
        );
    }
}