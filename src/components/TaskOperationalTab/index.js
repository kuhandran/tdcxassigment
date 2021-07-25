import { Button } from "react-bootstrap";
import React from "react";
import './TaskOperationalTab.css';
import deleteLogo from "../../assets/svg/trash-solid.svg";
import editLogo from "../../assets/svg/pen-solid.svg";
import check from "../../assets/svg/check.svg";
import uncheck from "../../assets/svg/blank-check.svg";



export class TaskOperationalTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "Ali",
            tasks: [
                {
                    "name": "Refactor something",
                    "completed": false
                },
                {
                    "name": "Refactor nothing",
                    "completed": true
                }
            ]
        };
    }

    render() {
        return (
            <div className={`${"row"} ${"TaskOperationalTab-panel"}`}>
                <h3 className={`${"col-sm-6"} ${"TaskOperationalTab-text"}`}>Task</h3>
                <input className={`${"form-control"} ${"TaskOperationalTab-textbox"} ${"col-sm-4"}`} type="text" placeholder="&#xF002; Search by Task Name"></input>
                <Button className="col-sm-2">+ New Task</Button>

                <div className="TaskOperationalTab-ListPaneContainer">
                    <ul className={`${"list-group"} ${"TaskOperationalTab-ListPane"}`}>
                        {this.state.tasks.map((task, index) => (
                                <li className={`${"list-group-item"} ${"TaskOperationalTab-Items"} ${"row"}`}>
                                <div className={`${"col-sm-12"} ${"TaskOperationalTab-bottomBorder"}`}>
                                <img className={`${"col-sm-2"} ${"TaskOperationalTab-checkBox"}`} src={task.completed ? check : uncheck}/>
                                <span className={`${"col-sm-6"} ${"TaskOperationalTab-taskName"} ${task.completed ? "TaskOperationalTab-complted" : "TaskOperationalTab-uncompleted"}`}>{task.name}</span>
                                <img  className={`${"col-sm-2"} ${"TaskOperationalTab-icons"}`}   src={editLogo}/>
                                <img  className={`${"col-sm-2"} ${"TaskOperationalTab-icons"}`}   src={deleteLogo} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>



            </div>
        );
    }
}