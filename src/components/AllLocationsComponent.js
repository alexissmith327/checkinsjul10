import React from 'react';
import { Card, CardImg, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLocation({location}) {
        return (
            <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={location.image} alt={location.name} />
                <CardBody>
                </CardBody>
            </Card>
        </div>
        );
    }


    function LocationInfo(props) {
        if (props.location) {
            return (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{props.location.name}</BreadcrumbItem>
                                </Breadcrumb>
                                <h2>{props.location.name}</h2>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <RenderLocation location={props.location} />
                        </div>
                    </div>
                );
        }
        return <div />;
    }
    
    export default LocationInfo;