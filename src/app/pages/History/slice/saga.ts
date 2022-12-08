import { createOrderAPI, getPaymentMethodsAPI } from 'app/service/checkoutAPI';
import { historySearch } from 'app/service/historyAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { SEARCH_HISTORY } from '.';
export function* searchHistory({ payload }) {
  try {
    const param = QueryString.stringify(payload);
    const { data } = yield call(historySearch, param);

    yield put(SEARCH_HISTORY.success(data));
  } catch (err) {
    SEARCH_HISTORY.failure();
  }
}
export function* historySaga() {
  yield takeLatest(SEARCH_HISTORY.TRIGGER, searchHistory);
}
