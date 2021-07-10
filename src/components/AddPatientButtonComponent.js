import React, { Component } from 'react';
import { CardHeader, Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input } from 'reactstrap';

import {LINE} from '../shared/patientsLine'
class AddPatientButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            patientsInLine: LINE
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.addNewPatient = this.addNewPatient.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    addNewPatient(event) {
        this.toggleModal();
        event.preventDefault();
        console.log(LINE);
        };

    render() {
        return (
            <div>
                <CardHeader className="room"> Walk-Ins <Button className="addNewPatient ml-2" onClick={this.toggleModal}> Add New Patient</Button></CardHeader>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add New Patient</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.addNewPatient}>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input type="text" ref="firstName" id="firstName" name="firstName" 
                                    innerRef={input => this.firstName = input} />
                                     <Label htmlFor="lastName">Last Name</Label>
                                <Input type="text" ref="lastName" id="lastName" name="lastName" 
                                    innerRef={input => this.lastName = input} />
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input type="date" ref="dob" id="dob" name="dob" 
                                    innerRef={input => this.dob = input} />
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default AddPatientButton;