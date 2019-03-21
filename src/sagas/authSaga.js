import {
    put, call, takeLatest
  } from 'redux-saga/effects';
  
  import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
  } from '../constants/actionTypes';
  import {
    requestLogin
  } from '../api/auth';
  
  import { setToken } from '../utils/axios';
  
  function* requestSignIn(action) {
    try {
      const { email, password } = action.payload;
      const credentials = yield call(requestLogin, { email, password });
      const { data } = credentials;

      yield put({ type: LOGIN_SUCCESS, payload: { auth: data } });
      
      setToken(data.token);
      localStorage.setItem('authToken', data.token)

    } catch (error) {
      const { data: { status, reason } } = error.response;

      yield put({ type: LOGIN_FAILURE });
    }
  }
  
  /*
  function* requestSignUp(action) {
    try {
      const {
        email, firstname, lastname, password
      } = action.payload;
      const credentials = yield call(requestRegister, {
        email, firstname, lastname, password
      });
      const { data } = credentials;
  
      yield put({ type: REGISTER_SUCCESS, payload: { auth: data } });
    } catch (error) {
      yield put({ type: REGISTER_FAILURE });
    }
  }
  */

  /*
  function* requestSignOut() {
    try {
      yield call(requestLogout);
      yield put({ type: LOGOUT_SUCCESS });
    } catch (error) {
      yield put({ type: LOGOUT_FAILURE });
    }
  }
  */
  
  const authSaga = [
    takeLatest(LOGIN_REQUEST, requestSignIn)
  ];
  
  export default authSaga;
  