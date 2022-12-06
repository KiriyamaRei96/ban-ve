import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { appSaga } from './saga';
import { AppState } from './types';
import { createRoutine } from 'redux-saga-routines';

export const GET_USER_INFO = createRoutine('app/getUserInfo');
export const LOG_OUT = createRoutine('app/logOut');

export const initialState: AppState = {
  loading: false,
  success: false,
  error: false,
  isLogged: false,
  userInfo: {},
};
const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loginSuccesses: state => {
      state.isLogged = true;
    },
    clearData: state => {
      state.isLogged = false;
      state.userInfo = {};
    },
  },
  extraReducers: {
    [GET_USER_INFO.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [GET_USER_INFO.SUCCESS]: (state, actions: any) => {
      state.userInfo = actions.payload;
      state.loading = false;
      state.error = false;
    },
    [GET_USER_INFO.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
    [LOG_OUT.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [LOG_OUT.SUCCESS]: (state, actions: any) => {
      // state = initialState;
      state.loading = false;
      state.error = false;
    },
    [LOG_OUT.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: appActions } = slice;
export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: appSaga });
  return { actions: slice.actions };
};
