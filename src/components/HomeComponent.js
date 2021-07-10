import React from 'react';
import {Jumbotron } from 'reactstrap';
function Home(props) {
    return (
            <Jumbotron fluid>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1><strong>Check-Ins</strong></h1>
                            <h2>Next Level Urgent Care</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
    );
}

export default Home;