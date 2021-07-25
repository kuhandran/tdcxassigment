import React from "react";
import './DashboardHeader.css';
import profile from '../../../assets/img/profiles/profile.png';

export class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "Ali"
        };
    }

    render() {
        return (
            <nav className={`${"navbar fixed-top navbar-light bg-white"} ${"Dashboard-Header"}`} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={profile} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        {this.state.name}
                    </a>
                    <div className="d-flex">
                        <span className="Dashboard-LogoutButton">Logout</span>
                    </div>
                </div>
            </nav>
        );
    }
}