import { Button } from "react-bootstrap";
import React from "react";
import './TaskOperationalTab.css';
import deleteLogo from "../../assets/svg/trash-solid.svg";
import editLogo from "../../assets/svg/pen-solid.svg";
import check from "../../assets/svg/check.svg";
import uncheck from "../../assets/svg/blank-check.svg";
import { EditModal } from "./EditModal";

/*
  Date: 24/07/2021
  Developer : Kuhandran
  Purpose:
  - componentDidMount will update all the tasks
  - {filterSearch} search only the bottom items
  - {editRecord} is for open the modal to edit the name
  - {updateTaskName} to update the taskname to be edited
  */



export class TaskOperationalTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredTask: [],
            showEditModal: false,
            editid: null,
            editname: null
        };
    }




    componentDidMount() {
        if (this.props.allTasks) {
            this.setState({ tasks: this.props.allTasks })
        }
    }

    filterSearch = (event) => {
        let search = event.target.value;
        let allItems = this.props.allTasks;
        if (search && search !== "") {
            let fileteredTask = allItems.filter(function (task) {
                return task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            });
            this.setState({ filteredTask: fileteredTask });
        }
        else {
            this.setState({ filteredTask: [] });
        }
    }

    editRecord = (id, name) => {
        this.setState({
            showEditModal: true,
            editid: id,
            editname: name
        })
    }

    updateTaskName = (name) => {
        this.props.updateTaskName(this.state.editid, name);
        this.setState({
            showEditModal: false,
            editid: null,
            editname: null
        })
    }

    render() {

        let DisplayTaskValue = this.state.filteredTask.length !== 0 ? this.state.filteredTask : this.props.allTasks;

        return (
            <div>
                {this.state.showEditModal && <EditModal
                    show={this.state.showEditModal}
                    name={this.state.editname}
                    updateTaskName={this.updateTaskName}
                />}
                <div className={`${"row"} ${"TaskOperationalTab-panel"}`}>
                    <h3 className={`${"col-sm-6"} ${"TaskOperationalTab-text"}`}>Task</h3>
                    <input className={`${"form-control"} ${"TaskOperationalTab-textbox"} ${"col-sm-4"}`} type="text" placeholder="&#xF002; Search by Task Name" onChange={this.filterSearch}></input>
                    <Button className="col-sm-2" onClick={this.props.getToggleModal(true)}>+ New Task</Button>
                    <div className="TaskOperationalTab-ListPaneContainer">
                        <ul className={`${"list-group"} ${"TaskOperationalTab-ListPane"}`}>
                            {DisplayTaskValue.map((task, index) => (
                                <li className={`${"list-group-item"} ${"TaskOperationalTab-Items"} ${"row"}`}>
                                    <div className={`${"col-sm-12"} ${"TaskOperationalTab-bottomBorder"}`}>
                                        <img className={`${"col-sm-2"} ${"TaskOperationalTab-checkBox"}`} src={task.completed ? check : uncheck} onClick={() => this.props.UpdateStatusRecord(task.id, task.completed)} />
                                        <span className={`${"col-sm-6"} ${"TaskOperationalTab-taskName"} ${task.completed ? "TaskOperationalTab-complted" : "TaskOperationalTab-uncompleted"}`}>{task.name}</span>
                                        <img className={`${"col-sm-2"} ${"TaskOperationalTab-icons"}`} src={editLogo} onClick={() => this.editRecord(task.id, task.name)} />
                                        <img className={`${"col-sm-2"} ${"TaskOperationalTab-icons"}`} src={deleteLogo} onClick={() => this.props.deleteRecords(task.id)} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}