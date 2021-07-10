import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './LocationsComponent';
import Room from './RoomsComponent';
import Line from './LineComponent';
import Appts from './ApptsComponent';
import Checkout from './CheckoutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LOCATIONS } from '../shared/locations';
import {ROOMS} from '../shared/patientRooms';
import { APPTS } from '../shared/patientsAppointments';
import { LINE } from '../shared/patientsLine';
import { CHECKOUT } from '../shared/checkout';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            locations: LOCATIONS,
            rooms: ROOMS,
            appts: APPTS,
            line: LINE,
            checkout: CHECKOUT

        }
    }
    render () {
const HomePage = () => {
    return (
        <Home
            locations={this.state.locations.filter(location => location.featured)[0]}
        />
    );
};


const LocationRooms = ({ match }) => {
    return (
        <div className="container- pt-5">
            <div class="row">
                <div class="col-lg-6">
                    <Room />
                </div>
                <div className="col-lg-6 col-xl-3">
                    <Line />
                </div>
                <div className="col-lg-6 col-xl-3">
                    <Appts />
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-12">
                    <Checkout />
                </div>
            </div>
        </div>
    );
};

return (
    <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/directory' render={() =>
                <Directory locations={this.state.locations} />} />
            <Route path='/directory/:locationId' component={LocationRooms} />
            <Redirect to='/home' />
        </Switch>
        <Footer />
    </div>
);
}
}

export default Main;