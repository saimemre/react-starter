import { createSelector } from 'reselect';
import I from 'immutable';

const auth = state => state.auth;
console.log("adasd");
console.log(auth);
export const getUserInfo = createSelector(auth, profileInformation => profileInformation.get('auth', I.Map()));