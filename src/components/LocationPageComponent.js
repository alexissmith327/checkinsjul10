import React from 'react';
import { Jumbotron } from 'reactstrap';
import { LOCATIONS } from '../shared/locations.js'

function RenderLocationTitle({ location }) {
    return (
        <div className="col">
        <h1><strong>{this.location.name}</strong></h1>
    </div>
    );
}

function LocationPageTitle(props) {

    const locationTitle = LOCATIONS.map(locationTitle => {
        return (
                <li className="patientLine"><RenderLocationTitle locationTitle={locationTitle} /></li>
        );
    });

    return (
        <div>
                    <Jumbotron fluid>
                <div className="container-fluid">
                    <div className="row">
                        {locationTitle}
                    </div>
                </div>
            </Jumbotron>
                    </div>
    );
}

export default LocationPageTitle;