import React from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import { CHECKOUT } from '../shared/checkout'


function RenderCheckout({ checkout }) {
    return (
                    <CardBody>
                    {checkout.firstName} {checkout.lastName}
                    </CardBody>
    );
}

function Checkout(props) {

    const checkout = CHECKOUT.map(checkout => {
        return (
                <li className="patientLine"><RenderCheckout checkout={checkout} /></li>
        );
    });

    return (
        <div>
                    <CardHeader className="room"> Checkout</CardHeader>
                    <CardBody>
                    <ol>
                        {checkout}
                    </ol>
                    </CardBody>
        </div>
    );
}

export default Checkout;
