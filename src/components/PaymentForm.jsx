import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'reactstrap';
import axios from 'axios';

import STRIPE_PUBLISHABLE from 'config/constants/stripe';
import PAYMENT_SERVER_URL from 'config/constants/server';

const CURRENCY = 'UAH';

const fromUAHToCoins = amount => amount * 100;

const onToken = (projectId, amount, makeDonation) => (token) => (
    axios.post(PAYMENT_SERVER_URL, {
        projectId,
        amount: fromUAHToCoins(amount),
        stripeToken: token.id
    })
        .then((res) => {
            if (res.data.status && res.data.status === "succeeded") {
                makeDonation(res.data.token);
            }
        })
        .catch((err) => {
            console.log(err)
        })
);

const PaymentForm = (props) => (
  <StripeCheckout
    name={props.name}
    description={props.description}
    amount={fromUAHToCoins(props.amount)}
    token={onToken(props.projectId, props.amount, props.makeDonation)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE} >
      <input type='hidden' name='amount' value={props.amount} />
      <input type='hidden' name='projectId' value={props.projectId} />
      <Button className="card-link py-3 px-5 text-uppercase rounded-0" role="button" disabled={!props.amount}>Donate</Button>
  </StripeCheckout>
);

export default PaymentForm;