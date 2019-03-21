import I from 'immutable';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';


const initialState = I.fromJS({
  auth: {}
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      return state.merge(I.fromJS(action.payload.auth));
    }
    case LOGOUT_SUCCESS:
    default: return state;
  }
}
