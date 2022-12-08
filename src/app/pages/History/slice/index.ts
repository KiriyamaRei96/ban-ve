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
  search: {
    page: 1,
  },
};
const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    clearSearch: state => {
      state.search = { page: 1 };
    },
  },
  extraReducers: {
    [SEARCH_HISTORY.TRIGGER]: state => {
      state.loading = true;
    },
    [SEARCH_HISTORY.SUCCESS]: (state, action) => {
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
