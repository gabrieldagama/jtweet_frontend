import Axios from 'axios';

export function createUser(customer) {
  var endpoint = process.env.REACT_APP_JTWEET_GATEWAY_ENDPOINT+'users/create';
  return Axios.post(
    endpoint, 
    customer,
  );
}

export function loginUser(credentials) {
  var endpoint = process.env.REACT_APP_JTWEET_GATEWAY_ENDPOINT+'users/login';
  return Axios.post(
    endpoint, 
    credentials,
  );
}