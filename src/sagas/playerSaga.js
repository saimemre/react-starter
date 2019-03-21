import {
    put, call, takeLatest
  } from 'redux-saga/effects';
  
  import {
    GET_ALL_PLAYERS_REQUEST, GET_ALL_PLAYERS_SUCCESS, GET_ALL_PLAYERS_FAILURE, GET_PLAYER_DETAIL_SUCCESS, GET_PLAYER_DETAIL_FAILURE, GET_PLAYER_DETAIL_REQUEST
  } from '../constants/actionTypes';
  import {
    requestCreate, getPlayers, getPlayerDetail
  } from '../api/player';
  

function* fetchPlayers() {
  try {
    const players = yield call(getPlayers);
    const { status, data } = players;
    console.log(data);
    if (status === 200) {
      yield put({ type: GET_ALL_PLAYERS_SUCCESS, payload: { players: data } });
    } else {
      yield put({ type: GET_ALL_PLAYERS_FAILURE });
    }
  } catch (error) {
    console.log(error)
    yield put({ type: GET_ALL_PLAYERS_FAILURE });
  }
}

function* fetchPlayerDetail(action) {
  try {
    const player = yield call(getPlayerDetail, action.payload.id);
    
    const { status, data } = player;
    if (status === 200) {
      yield put({ type: GET_PLAYER_DETAIL_SUCCESS, payload: { selectedPlayer: data } });
    } else {
      yield put({ type: GET_PLAYER_DETAIL_FAILURE });
    }
  } catch (error) {
    yield put({ type: GET_PLAYER_DETAIL_FAILURE });
  }
}
  
  
const playerSaga = [
  takeLatest(GET_ALL_PLAYERS_REQUEST, fetchPlayers),
  takeLatest(GET_PLAYER_DETAIL_REQUEST, fetchPlayerDetail)
];

export default playerSaga;
  