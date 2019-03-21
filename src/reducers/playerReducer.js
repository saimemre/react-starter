import I from 'immutable';
import { GET_ALL_PLAYERS_SUCCESS, GET_PLAYER_DETAIL_SUCCESS } from '../constants/actionTypes';

const initialState = I.fromJS({
  playerInfo: {},
  players: [],
  selectedPlayer: [],
  total: 0
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLAYERS_SUCCESS: {
      
      const list = action.payload.players;
      
      
      return state.mergeIn(['players'], I.fromJS(list));
    }
    case GET_PLAYER_DETAIL_SUCCESS: {
      return state.update('selectedPlayer', seenPlayerList => seenPlayerList.push(I.fromJS(action.payload.selectedPlayer)));
    }
    default: return state;
  }
}