import { createOrderAPI, getPaymentMethodsAPI } from 'app/service/checkoutAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { SEARCH_HISTORY } from '.';
export function* searchHistory({ payload }) {}
export function* historySaga() {
  yield takeLatest(SEARCH_HISTORY.TRIGGER, searchHistory);
}
