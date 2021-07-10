import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { LINE } from '../shared/patientsLine.js'
import AddPatientButton from './AddPatientButtonComponent';
import TextCheckinLine from './TextCheckinLineComponent';

function RenderLine({ line }) {
    return (
                    <CardBody>
                    {line.firstName} {line.lastName}
                    </CardBody>
    );
}

function Line(props) {

    const line = LINE.map(line => {
        return (
                <li className="patientLine"><RenderLine line={line} /></li>
        );
    });

    return (
        <div>
            <Card>
            <AddPatientButton />
                    <CardBody>
                    <ol>
                        {line}
                    </ol>
                    <div><TextCheckinLine /></div>
                    </CardBody>
                    </Card>
                    </div>
    );
}

export default Line;