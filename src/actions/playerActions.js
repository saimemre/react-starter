import {
 GET_ALL_PLAYERS_REQUEST, GET_PLAYER_DETAIL_REQUEST
} from '../constants/actionTypes';


export function getAllPlayers() {
  return {
    type: GET_ALL_PLAYERS_REQUEST
  };
}

export function getPlayerDetail(id) {
  return {
    type: GET_PLAYER_DETAIL_REQUEST,
    payload: {
      id
    }
  };
}