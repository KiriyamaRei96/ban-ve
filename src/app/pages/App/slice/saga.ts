import { getNoityAPI, getUserInfoAPI, logOutAPI } from 'app/service/accountAPI';
import { store } from 'index';
import QueryString from 'qs';
import { notify } from 'reapop';
import { takeLatest, put, call } from 'redux-saga/effects';
import { removeCookie } from 'utils/cookies';
import { useGlobalFunctions } from 'utils/hooks/useGlobalFuncion';
import { sunWorldToken } from 'utils/types/const';
import { appActions, GET_NOITY, GET_USER_INFO, LOG_OUT } from '.';
export function* getUserInfo({ payload }) {
  const param = QueryString.stringify(payload);
  try {
    const { data } = yield call(getUserInfoAPI, param);
    yield put(GET_USER_INFO.success(data));
  } catch (err) {
    yield put(GET_USER_INFO.failure());
  }
}
export function* getNoity() {
  try {
    const { data } = yield call(getNoityAPI);
    yield put(GET_NOITY.success(data));
  } catch (err) {
    yield put(GET_NOITY.failure());
  }
}
export function* logOut() {
  try {
    const data = yield call(logOutAPI);
    if (data.status === 200) {
      yield removeCookie(sunWorldToken);
      yield put(appActions.clearData());
      yield put(LOG_OUT.success());
    }
  } catch (err) {
    yield put(LOG_OUT.failure());
  }
}
export function* appSaga() {
  yield takeLatest(GET_USER_INFO.TRIGGER, getUserInfo);
  yield takeLatest(GET_NOITY.TRIGGER, getNoity);

  yield takeLatest(LOG_OUT.TRIGGER, logOut);
}
