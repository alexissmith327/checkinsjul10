import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import RoomButtons from './RoomCheckinButtonsComponent';

class ToggleClassLine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
        };

        this.toggleClick = this.toggleClick.bind(this);
        this.newClass = this.newClass.bind(this);
    }


    toggleClick() {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    }

    

    newClass(event) {
        alert(`Class Changed`)
        this.toggleClick();
        event.preventDefault();
    }


    render() {
        return (
            <div>
               
            </div>
        );
    }
}
export default ToggleClassLine;