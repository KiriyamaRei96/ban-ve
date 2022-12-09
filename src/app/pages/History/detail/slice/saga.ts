import { getHistoryDetailAPI } from 'app/service/historyDetailAPI';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_HISTORY_DETAIL } from '.';
export function* getHistoryDetail({ payload }) {
  try {
    const { data } = yield call(getHistoryDetailAPI, payload);

    yield put(GET_HISTORY_DETAIL.success(data));
  } catch (err) {
    GET_HISTORY_DETAIL.failure();
  }
}
export function* historyDetailSaga() {
  yield takeLatest(GET_HISTORY_DETAIL.TRIGGER, getHistoryDetail);
}
