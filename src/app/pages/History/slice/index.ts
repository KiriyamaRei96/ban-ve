import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createRoutine } from 'redux-saga-routines';
import { historySaga } from './saga';
import { HistoryState } from './types';
export const SEARCH_HISTORY = createRoutine('history/search');
export const initialState: HistoryState = {
  loading: false,
  error: false,
  orderStateOption: [],
  search: {
    page: 1,
  },
  historyList: [],
};
const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    clearSearch: state => {
      state.search = { page: 1 };
    },
    setOption: (state, action) => {
      state.search = { ...state.search, orderState: action.payload, page: 1 };
    },
    setPage: (state, action) => {
      state.search = { ...state.search, page: action.payload };
    },
    setSearch: (state, action) => {
      state.search = { ...state.search, search: action.payload, page: 1 };
    },
    setDate: (state, action) => {
      state.search = {
        ...state.search,
        fromTime: action.payload.fromTime,
        toTime: action.payload.toTime,
        page: 1,
      };
    },
  },
  extraReducers: {
    [SEARCH_HISTORY.TRIGGER]: state => {
      state.loading = true;
    },
    [SEARCH_HISTORY.SUCCESS]: (state, action) => {
      state.historyList = action.payload.data;
      state.pagination = action.payload.paginator;
      state.orderStateOption = action.payload.orderStateOption;
      state.loading = false;
    },
    [SEARCH_HISTORY.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: historyActions } = slice;
export const useHistorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: historySaga });
  return { actions: slice.actions };
};
