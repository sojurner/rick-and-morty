import { takeLatest } from 'redux-saga';
import { retrieveInitialData, fetchPage } from './sagas';

export function* fetchData() {
  yield takeLatest('FETCH_INITIAL', retrieveInitialData);
  yield takeLatest('FETCH_PAGE', fetchPage);
}
