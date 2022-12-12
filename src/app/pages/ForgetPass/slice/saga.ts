import { getEventsAPI, getTicketsAPI } from 'app/service/bookingAPI';
import { getToken, resetPassWord } from 'app/service/forgetAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_TOKEN, RESET_PASS } from '.';
function* getTokenSaga({ payload }) {
  const formData = new FormData();
  Object.entries(payload).forEach((info: any) =>
    formData.append(info[0], info[1]),
  );

  try {
    const data = yield call(getToken, formData);
    yield put(GET_TOKEN.success(payload.username));
  } catch (err: any) {
    const { response } = err;
    yield put(GET_TOKEN.failure(response?.data));
  }
}
function* resetPass({ payload }) {
  const formData = new FormData();
  Object.entries(payload).forEach((info: any) =>
    formData.append(info[0], info[1]),
  );

  try {
    const data = yield call(resetPassWord, formData);
    yield put(RESET_PASS.success());
  } catch (err: any) {
    const { response } = err;
    yield put(RESET_PASS.failure(response?.data));
  }
}
export function* forgetPassSaga() {
  yield takeLatest(GET_TOKEN.TRIGGER, getTokenSaga);
  yield takeLatest(RESET_PASS.TRIGGER, resetPass);
}
