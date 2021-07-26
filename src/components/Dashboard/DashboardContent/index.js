import React from "react";
import { InfoPanelCards } from "../InfoPanelCards";
import { TaskOperationalTab } from "../../TaskOperationalTab";
import axios from "axios";
import { TaskModal } from "../TaskModal";
import { AddNewModal } from "../AddNewModal"


class DashboardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            pending: [],
            completed: [],
            totalPending: 0,
            totalCompleted: 0,
            openAddTaskModal: false,
            filteredTask: [],
            editId: null
        };
    }

    componentDidMount() {
        this.getAllTasks(this.props.token);
    }

    getAllTasks = async (data) => {
        try {
            let resp = await axios.post("http://localhost:3001" + "/tasks", data);
            if (resp) {
                this.setState({ task: resp.data })
                this.getDashboardDetails(this.state.task)
            }
        } catch (err) {
            console.error(err);
        }
    };

    getDashboardDetails(allItems) {
        let pendingTask = allItems.filter(function (task) {
            return !task.completed;
        });

        let completedTask = allItems.filter(function (task) {
            return task.completed;
        });

        this.setState({
            pending: pendingTask,
            completed: completedTask,
            totalPending: pendingTask.length,
            totalCompleted: completedTask.length
        })
    }

    getToggleModal = (param) => {
        this.setState({ openAddTaskModal: param })
    }

    deleteRecords = (data) => {
        let ActiveTask = this.state.task.filter(function (task) {
            return task.id !== data;
        });
        this.setState({ task: ActiveTask });
        this.getDashboardDetails(ActiveTask);
    }

    AddNewTask = (data) => {
        let allTask = this.state.task
        let newTask = {
            id: allTask.length + 1 + "N",
            name: data,
            completed: false
        }
        allTask.push(newTask);
        this.setState({ task: allTask, openAddTaskModal: false });
        this.getDashboardDetails(allTask);
    }

    UpdateStatusRecord = (data, staus) => {
        let updatedTask = this.state.task.filter(function (task) {
            if (task.id === data) {
                task.completed = !staus
            }
            return task;
        });
        this.setState({ task: updatedTask });
        this.getDashboardDetails(updatedTask);
    }

    updateTaskName = (id, name) => {
        let updatedTask = this.state.task.filter(function (task) {
            if (task.id === id) {
                task.name = name
            }
            return task;
        });
        this.setState({ task: updatedTask });
        this.getDashboardDetails(updatedTask);

    }


    render() {
        let taskLength = this.state.task.length;


        return (
            <div>
                {taskLength === 0 && <div>
                    <TaskModal
                        show={this.state.openAddTaskModal}
                        addNewTask={this.AddNewTask}
                    />
                    <AddNewModal
                        getToggleModal={this.getToggleModal}
                    />
                </div>}
                {taskLength > 0 && <div>
                    <TaskModal
                        show={this.state.openAddTaskModal}
                        addNewTask={this.AddNewTask}
                    />
                    <InfoPanelCards
                        pending={this.state.pending}
                        completed={this.state.completed}
                        totalCompleted={this.state.totalCompleted}
                        totalPending={this.state.totalPending}
                        allTasks={this.state.task}

                    />
                    <TaskOperationalTab
                        allTasks={this.state.task}
                        deleteRecords={this.deleteRecords}
                        UpdateStatusRecord={this.UpdateStatusRecord}
                        updateTaskName={() => this.updateTaskName}
                        getToggleModal={() => this.getToggleModal}
                        updateTaskName={this.updateTaskName}
                    />
                </div>}
            </div>
        );
    }
}


export { DashboardContent };
