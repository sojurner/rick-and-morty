import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as call from '../utils/apiCalls';

function* retrieveAndAddData() {
  const characters = yield call.fetchCharacters();
  yield put({ type: 'ADD_CHARACTER_SET', payload: characters });
}

export function* fetchData(type) {
  yield takeLatest('FETCH_CHARACTERS', retrieveAndAddData);
}
