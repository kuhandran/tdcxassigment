import React from "react";
import { render } from "react-dom";
import { Card, Button } from "react-bootstrap";
import './AddNewModal.css'

export class AddNewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: ""
        };
    }

    render() {
        return (
            <Card className="AddNewModal-cards">
                <Card.Body className="AddNewModal-cards-body">
                    <Card.Title className="Login-cards-title" >You Have No Task</Card.Title>
                    <Button className="btn btn-primary btn-lg">+ New Task</Button>
                </Card.Body>
            </Card>
        );
    }
}