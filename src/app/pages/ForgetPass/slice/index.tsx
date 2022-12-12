import { createSlice } from 'utils/@reduxjs/toolkit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createRoutine } from 'redux-saga-routines';
import { forgetPassSaga } from './saga';
import { forgetPassState } from './types';
export const GET_TOKEN = createRoutine('forgetPass/getToken');
export const RESET_PASS = createRoutine('forgetPass/resetPass');

export const initialState: forgetPassState = {
  loading: false,
  error: false,
  pageState: 'getToken',
};
const slice = createSlice({
  name: 'forgetPass',
  initialState,
  reducers: {
    resetState: state => {
      state = { loading: false, error: false, pageState: 'getToken' };
    },
  },
  extraReducers: {
    [GET_TOKEN.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [GET_TOKEN.SUCCESS]: (state, action) => {
      state.message = undefined;
      state.username = action.payload;
      state.pageState = 'changePass';
      state.loading = false;
      state.error = false;
    },
    [GET_TOKEN.FAILURE]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = true;
    },
    [RESET_PASS.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [RESET_PASS.SUCCESS]: (state, action) => {
      state.needNavigate = true;
      state.loading = false;
      state.error = false;
    },
    [RESET_PASS.FAILURE]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: forgetPassActions } = slice;
export const useForgetPassSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: forgetPassSaga });
  return { actions: slice.actions };
};
