import { getUserInfoAPI } from 'app/service/accountAPI';
import { store } from 'index';
import { notify } from 'reapop';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_USER_INFO } from '.';
export function* getUserInfo() {
  try {
    const { data } = yield call(getUserInfoAPI);
    yield put(GET_USER_INFO.success(data));
  } catch (err) {
    store.dispatch(
      notify('error', {
        title: 'Oops',
        dismissAfter: 5000,
      }),
    );
    yield put(GET_USER_INFO.failure());
  }
}
export function* appSaga() {
  yield takeLatest(GET_USER_INFO.TRIGGER, getUserInfo);
}
