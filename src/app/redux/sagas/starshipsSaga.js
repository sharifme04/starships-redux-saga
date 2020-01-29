import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_STARSHIP_REQUESTED } from "../actionType/starshipType";
import { starshipsSuccess, starshipsFail } from "../actions/starships";
import { api } from "../services/services";

function* fetchStarships(action) {
  const { starships, error } = yield call(api.fetchData, action);
  if (starships) yield put(starshipsSuccess(starships));
  else yield put(starshipsFail(error));
}

export default function* watchFetchData() {
  yield takeLatest(FETCH_STARSHIP_REQUESTED, fetchStarships);
}
