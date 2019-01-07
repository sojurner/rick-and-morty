import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as call from '../utils/apiCalls';

function* retrieveAndAddData() {
  const characters = yield call.fetchData('characters');
  yield put({ type: 'ADD_CHARACTER_SET', payload: characters });
  const episodes = yield call.fetchData('episodes');
  yield put({ type: 'ADD_EPISODES', payload: episodes });
  const locations = yield call.fetchData('locations');
  yield put({ type: 'ADD_LOCATIONS', payload: locations });
}

export function* fetchData(type) {
  yield takeLatest('FETCH_CHARACTERS', retrieveAndAddData);
}
