import Axios from 'axios';

export function createCustomer(customer) {
  var endpoint = process.env.REACT_APP_JTWEET_GATEWAY_ENDPOINT+'users/create';
  return Axios.post(endpoint, 
  customer,
  );
}
