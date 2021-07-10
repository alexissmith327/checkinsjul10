import React from 'react';
import {DropdownItem} from 'reactstrap';
import {LOCATIONS} from '../shared/locations.js'



function RenderLocation({ location }) {
    return (
                    <DropdownItem className="nav-link" href={'/directory/' + location.id}>{location.name} </DropdownItem>
    );
}

function LocationNav(props) {

    const location = LOCATIONS.map(location => {
        return (
            <div key={location.id}>
                <RenderLocation location={location} />
            </div>
        );
    });

    return (
            <div className="DropdownMenu">
                {location}
            </div>
    );
}

export default LocationNav;