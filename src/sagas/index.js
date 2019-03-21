import { all } from 'redux-saga/effects';

import auth from './authSaga';
import playerSaga from './playerSaga';

export default function* rootSaga() {
  yield all([
    ...auth,
    ...playerSaga
  ]);
}
