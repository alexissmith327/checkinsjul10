import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { APPTS } from '../shared/patientsAppointments.js'
import TextCheckinAppts from './TextCheckinApptsComponent';

function RenderAppts({ appts }) {
    return (
                    <CardBody>
                    {appts.time}- {appts.firstName} {appts.lastName}
                    </CardBody>
    );
}

function Appts(props) {

    const appts = APPTS.map(appts => {
        return (
                <li className="patientLine"><RenderAppts appts={appts} /></li>
        );
    });

    return (
        <div>
            <Card>
                    <CardHeader className="room"> Appts</CardHeader>
                    <CardBody>
                    <ul>
                        {appts}
                    </ul>
                    <TextCheckinAppts />
                    </CardBody>
                    </Card>
        </div>
    );
}

export default Appts;