import axios from '../../utils/axios';
import endPoints from '../../constants/endPoints';

export default function getPlayerDetail(id) {
  return axios(endPoints.GET_PLAYER_DETAIL(id), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
