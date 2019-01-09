import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as call from '../utils/apiCalls';

function* retrieveInitialData() {
  const data = yield call.fetchData('characters');
  yield put({
    type: 'ADD_INITIAL_CHARACTERS',
    payload: data.characters,
    page: 1
  });
  yield put({ type: 'SET_CHARACTER_PAGECOUNT', payload: data.pageCount });

  const episodes = yield call.fetchData('episodes');
  yield put({ type: 'SET_EPISODE_PAGECOUNT', payload: episodes.pageCount });
  yield put({
    type: 'ADD_INITIAL_EPISODES',
    payload: episodes.episodes,
    page: 1
  });

  const locations = yield call.fetchData('locations');
  yield put({ type: 'SET_LOCATION_PAGECOUNT', payload: locations.pageCount });
  yield put({
    type: 'ADD_INITIAL_LOCATIONS',
    payload: locations.locations,
    page: 1
  });
}

export function* fetchPage({ category, page }) {
  const data = yield call.fetchNextPage(category, page);
  switch (category) {
    case 'characters':
      yield put({ type: 'ADD_CHARACTER_SET', payload: data.characters, page });
      yield put({ type: 'CHARACTER_PAGE', page });
      break;
    case 'episodes':
      yield put({ type: 'ADD_EPISODE_SET', payload: data.episodes, page });
      yield put({ type: 'EPISODE_PAGE', page });
      break;
    case 'locations':
      yield put({ type: 'ADD_LOCATION_SET', payload: data.locations, page });
      yield put({ type: 'LOCATION_PAGE', page });
      break;
    default:
      return;
  }
}

export function* fetchData() {
  yield takeLatest('FETCH_INITIAL', retrieveInitialData);
  yield takeLatest('FETCH_PAGE', fetchPage);
}
