import { call } from 'redux-saga/effects'
import watchFetchData from './starshipsSaga';

export default function* rootSaga() {
  yield call(watchFetchData)
}
