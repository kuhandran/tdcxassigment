import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export class TaskModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="mg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <h4>Centered Modal</h4>
        </Modal.Body>
       
      </Modal>
    );
  }
}


