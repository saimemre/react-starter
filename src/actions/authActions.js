import {
    LOGIN_REQUEST, REGISTER_REQUEST, 
    FORGOT_PASSWORD_REQUEST,
    UPDATE_PASSWORD_REQUEST
  } from '../constants/actionTypes';
  
  export function loginRequest(email, password) {
    return {
      type: LOGIN_REQUEST,
      payload: {
        email,
        password
      }
    };
  }
  
  export function registerRequest(email, firstname, lastname, password) {
    return {
      type: REGISTER_REQUEST,
      payload: {
        email,
        firstname,
        lastname,
        password
      }
    };
  }
  
  export function forgotPassword(email) {
    return {
      type: FORGOT_PASSWORD_REQUEST,
      payload: {
        email
      }
    };
  }
  
  export function updatePassword(oldPassword, newPassword, newPasswordAgain) {
    return {
      type: UPDATE_PASSWORD_REQUEST,
      payload: {
        oldPassword,
        newPassword,
        newPasswordAgain
      }
    };
  }
  