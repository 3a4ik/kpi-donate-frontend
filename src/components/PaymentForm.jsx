import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from 'config/constants/stripe';
import PAYMENT_SERVER_URL from 'config/constants/server';

const CURRENCY = 'UAH';

const fromUAHToCoins = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUAHToCoins(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const PaymentForm = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUAHToCoins(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default PaymentForm;