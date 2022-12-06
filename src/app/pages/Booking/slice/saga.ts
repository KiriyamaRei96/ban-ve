import { getEventsAPI, getTicketsAPI } from 'app/service/bookingAPI';
import QueryString from 'qs';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_EVENTS, GET_TICKETS } from '.';
export function* getEvents({ payload }) {
  try {
    const param = QueryString.stringify(payload);
    const { data } = yield call(getEventsAPI, param);
    yield put(GET_EVENTS.success(data.data));
  } catch ({ response }) {
    console.log(response);
    yield put(GET_EVENTS.failure());
  }
}
export function* getTickets({ payload }) {
  try {
    const param = QueryString.stringify(payload);

    const { data } = yield call(getTicketsAPI, param);
    yield put(GET_TICKETS.success(data.data));
  } catch ({ response }) {
    console.log(response);
    yield put(GET_TICKETS.failure());
  }
}
export function* bookingSaga() {
  yield takeLatest(GET_EVENTS.TRIGGER, getEvents);
  yield takeLatest(GET_TICKETS.TRIGGER, getTickets);
}
