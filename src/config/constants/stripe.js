const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_3gkka9ySkvjgw9ctuNbalkOw'
  : 'pk_test_3gkka9ySkvjgw9ctuNbalkOw';

export default STRIPE_PUBLISHABLE;