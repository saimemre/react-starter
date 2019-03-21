import axios from '../../utils/axios';
import endPoints from '../../constants/endPoints';

export default function getPlayers() {
  return axios(endPoints.GET_ALL_PLAYERS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
