import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({location}) {
    return (
        <Card>
            <Link to={`/directory/${location.id}`}>
                <CardImg width="100%" src={location.image} alt={location.name} />
                <CardImgOverlay>
                    <CardTitle className="mx-auto">{location.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.locations.map(location=> {
        return (
            <div key={location.name} className="col-md-5 m-1">
                <RenderDirectoryItem location={location} />
            </div>
        );
    });

    return (
        <div className="container pb-5">
            <div className="row">
                <div className="col">
                    <h2><strong>Locations</strong></h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;