// TODO: change servers
const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://kpi-donate.herokuapp.com/donate/confirm'
  : 'https://kpi-donate.herokuapp.com/donate/confirm';

export default PAYMENT_SERVER_URL;