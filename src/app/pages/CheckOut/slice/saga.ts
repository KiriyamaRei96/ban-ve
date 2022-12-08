import { createOrderAPI, getPaymentMethodsAPI } from 'app/service/checkoutAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { CREATE_ORDER, GET_PATMENT_METHODS } from '.';

function* getPaymentMethods({ payload }) {
  try {
    const param = QueryString.stringify(payload);
    const { data } = yield call(getPaymentMethodsAPI, param);
    yield put(GET_PATMENT_METHODS.success(data.data));
  } catch (err) {
    GET_PATMENT_METHODS.failure();
  }
}
function* createOrder({ payload }) {
  const formdata = new FormData();
  Object.entries({ ...payload.info }).forEach((value: any, index: any) => {
    if (value[1] !== undefined) {
      formdata.append(value[0], value[1]);
    }
  });
  payload.arr.forEach((item, id) => {
    Object.entries(item).forEach((key, value) => {
      formdata.append(`items[${id}][${key[0]}]`, `${key[1]}`);
    });
  });
  try {
    const { data } = yield call(createOrderAPI, formdata);

    if (data.paymentUrl) {
      window.location.href = data.paymentUrl;
    }
    if (data.data) {
      yield put(CREATE_ORDER.success(data.data));
    }
  } catch (err) {
    CREATE_ORDER.failure();
  }
}
export function* checkOutSaga() {
  yield takeLatest(GET_PATMENT_METHODS.TRIGGER, getPaymentMethods);
  yield takeLatest(CREATE_ORDER.TRIGGER, createOrder);
}
