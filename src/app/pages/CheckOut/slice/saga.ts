import { getPaymentMethodsAPI } from 'app/service/checkoutAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_PATMENT_METHODS } from '.';
function* getPaymentMethods({ payload }) {
  try {
    const param = QueryString.stringify(payload);
    const { data } = yield call(getPaymentMethodsAPI, param);
    yield put(GET_PATMENT_METHODS.success(data.data));
  } catch (err) {
    GET_PATMENT_METHODS.failure();
  }
}
export function* checkOutSaga() {
  yield takeLatest(GET_PATMENT_METHODS.TRIGGER, getPaymentMethods);
}
