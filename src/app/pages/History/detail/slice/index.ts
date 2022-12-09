import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createRoutine } from 'redux-saga-routines';
import { historyDetailSaga } from './saga';
import { HistoryDetailState } from './types';
export const GET_HISTORY_DETAIL = createRoutine('historyDetail/get');
export const initialState: HistoryDetailState = {
  loading: false,
  error: false,
};
const slice = createSlice({
  name: 'historyDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [GET_HISTORY_DETAIL.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [GET_HISTORY_DETAIL.SUCCESS]: (state, action) => {
      state.response = action.payload;
      state.loading = false;
    },
    [GET_HISTORY_DETAIL.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: historyDetailActions } = slice;
export const useHistoryDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: historyDetailSaga });
  return { actions: slice.actions };
};
