import React from "react";
import './InfoPanelCards.css'
import { PieChart } from "../../PieChart";


export class InfoPanelCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: ""
            
        };
    }    


    render() {
    
        return (
            <div className={`${"row"} ${"InfoLabels-Padding"}`}>
                <div className="col-sm-4 col-xs-12">
                    <div className={`${"card"} ${"InfoLabels-custom-cards"}`}>
                        <div className="card-body">
                            <h5 className={`${"card-title"} ${"InfoLabels-custom-cardtitle"}`}>Task Completed</h5>
                            <div className="cards-body-alignitems">
                                <span className="cards-task-done">{this.props.totalPending}</span>
                                <span className="cards-task-total">/</span>
                                <span className="cards-task-total">{this.props.totalCompleted}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className={`${"card"} ${"InfoLabels-custom-cards"}`}>
                        <div className="card-body">
                            <h5 className={`${"card-title"} ${"InfoLabels-custom-cardtitle"}`}>Latest Created Task</h5>
                            <ul>
                                {this.props.allTasks.map((task, index) => (
                                    <li className={task.completed ? "Completed" : "unCompleted"}> {task.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className={`${"card"} ${"InfoLabels-custom-cards"}`}>
                        <div className="card-body">
                            <div className="card-body-pie-padding">
                                <PieChart 
                                    totalPending = {this.props.totalPending}
                                    totalCompleted = {this.props.totalCompleted}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}