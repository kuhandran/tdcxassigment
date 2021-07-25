import React from "react";
import { DashboardHeader } from './DashboardHeader'
import { AddNewModal } from "./AddNewModal";
import { TaskModal } from "./TaskModal";
import { InfoPanelCards } from "./InfoPanelCards";
import { TaskOperationalTab } from "../TaskOperationalTab"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: ""
        };
    }

    render() {
        return (
            <div className="Login-Container">
                <DashboardHeader />
                {/* <AddNewModal />
                <TaskModal
                    show={true}
                    onHide={false}
                /> */}
                <InfoPanelCards/>
                <TaskOperationalTab/>
            </div>

        );
    }
}


export  {Dashboard};
