import axios from '../../utils/axios';
import endPoints from '../../constants/endPoints';

export default function requestLogin(user) {
  const data = {
    email: user['email'],
    password: user['password']
  }
  return axios(endPoints.LOGIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data
  });
}
