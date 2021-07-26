import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./EditModal.css"

/*
  Date: 24/07/2021
  Developer : Kuhandran
  Purpose:
  - onUpdateTaskName to setstate the taskname
  - {updateTaskName} props function will update the parent class
  */




export class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            taskName: false
        };
    }


    onUpdateTaskName = (event) => {
        this.setState({ taskName: event.target.value })
    }


    render() {

        let editValue = this.props.name && !this.state.taskName ? this.props.name : this.state.taskName;

        return (
            <Modal
                {...this.props}
                size="mg"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <h2 className={`${"TaskModal-title"}`}>+ Edit Task</h2>
                    <div className={`${"TaskModal-padding"}`}>
                        <input
                            className={`${"TaskModal-Text"} ${"form-control form-control-lg"}`}
                            type="text"
                            placeholder="Task Name"
                            value={editValue}
                            onChange={this.onUpdateTaskName}
                            aria-label=".form-control-lg example" />
                    </div>
                    <div className={`${"TaskModal-padding"}`}>
                        <Button
                            type="button"
                            onClick={() => this.props.updateTaskName(this.state.taskName)}
                            className={` ${"TaskModal-btn"} ${"btn btn-primary btn-lg"}`}
                        >
                            Submit
                        </Button>
                    </div>
                </Modal.Body>

            </Modal>
        );
    }
}


