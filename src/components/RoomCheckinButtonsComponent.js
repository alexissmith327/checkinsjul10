import React from 'react';
import {Button} from 'reactstrap';
import {ROOMS} from '../shared/patientRooms.js'

function RenderRoomButton({ room }) {
    return (
                        <Button type="button" id="checkin${room.name}" className="checkin btn-block">{room.name}</Button>
    );
}

function RoomButtons(props) {

    const room = ROOMS.map(room => {
        return (
            <div key={room.id} className="col-md-4 pb-2">
                <RenderRoomButton room={room} />
            </div>
        );
    });

    return (
            <div className="row">
                {room}
            </div>
    );
}

export default RoomButtons;