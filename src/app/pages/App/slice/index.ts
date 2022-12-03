import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { appSaga } from './saga';
import { AppState } from './types';

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
  reducers: {},
});
export const { actions: appActions } = slice;
export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: appSaga });
  return { actions: slice.actions };
};
