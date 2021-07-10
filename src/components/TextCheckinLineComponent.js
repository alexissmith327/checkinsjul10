import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import RoomButtons from './RoomCheckinButtonsComponent';

class TextCheckinLine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTextModalOpen: false,
            isCheckinModalOpen: false
        };

        this.toggleTextModal = this.toggleTextModal.bind(this);
        this.textMessage = this.textMessage.bind(this);
        this.toggleCheckinModal = this.toggleCheckinModal.bind(this);
        this.checkinPatient = this.checkinPatient.bind(this);
    }


    toggleTextModal() {
        this.setState({
            isTextModalOpen: !this.state.isTextModalOpen,
        });
    }

    toggleCheckinModal() {
        this.setState({
            isCheckinModalOpen: !this.state.isCheckinModalOpen
        });
    }

    textMessage(event) {
        alert(`Message: ${this.message.value} Status: Sent`)
        this.toggleTextModal();
        event.preventDefault();
    }

    checkinPatient(event) {
        alert(`Checkin: ${this.firstName.value}`)
        this.toggleCheckinModal();
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <Button className="checkin" onClick={this.toggleCheckinModal}> Checkin</Button> <Button className="text" onClick={this.toggleTextModal}> Send Text</Button>

               

                <Modal isOpen={this.state.isTextModalOpen} toggle={this.toggleTextModal}>
                    <ModalHeader toggle={this.toggleTextModal}>Send Text</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.textMessage}>
                            <FormGroup>
                                <Label htmlFor="message">Message:</Label>
                                <Input type="textarea" rows="4" cols="50" id="message" name="message" value="Hi, this is Next Level Urgent Care. Your room will be ready in 15 minutes."
                                    innerRef={input => this.message = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                

                <Modal isOpen={this.state.isCheckinModalOpen} toggle={this.toggleCheckinModal}>
                    <ModalHeader toggle={this.toggleCheckinModal}>Checkin</ModalHeader>
                    <ModalBody>
                       <RoomButtons/>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}
export default TextCheckinLine;