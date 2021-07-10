import React from 'react';
import { Card, CardHeader, CardTitle, CardBody, Button} from 'reactstrap';
import {ROOMS} from '../shared/patientRooms.js'

function RenderRoomItem({ room }) {
    return (
                    <Card>
                        <CardHeader className="room">
                            <CardTitle className="mx-auto">{room.name} <br></br><i className="fa fa-hourglass-end time"> Time in Room:</i></CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Button type="button" id="checkout${room.name}" className="checkout">Checkout</Button>
                        </CardBody>
                    </Card>
    );
}

function Room(props) {

    const room = ROOMS.map(room => {
        return (
            <div key={room.id} className="col-md-4 pb-2">
                <RenderRoomItem room={room} />
            </div>
        );
    });

    return (
            <div className="row">
                {room}
            </div>
    );
}

export default Room;