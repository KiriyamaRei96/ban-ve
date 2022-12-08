import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createRoutine } from 'redux-saga-routines';
import { checkOutSaga } from './saga';
import { CheckOutState } from './types';
export const GET_PATMENT_METHODS = createRoutine('checkOut/paymentMethods');
export const CREATE_ORDER = createRoutine('checkOut/order');
export const initialState: CheckOutState = {
  loading: false,
  error: false,
  paymentMethodList: [],
};
const slice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedMethod = action.payload;
    },
    setIsOrder: state => {
      state.isOrder = false;
    },
    clearResponse: state => {
      state.response = undefined;
    },
  },
  extraReducers: {
    [GET_PATMENT_METHODS.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [GET_PATMENT_METHODS.SUCCESS]: (state, actions) => {
      state.paymentMethodList = actions.payload;
      state.selectedMethod = actions.payload[0].id;
      state.loading = false;
      state.error = false;
    },
    [GET_PATMENT_METHODS.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
    [CREATE_ORDER.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [CREATE_ORDER.SUCCESS]: (state, actions) => {
      state.response = actions.payload;
      state.isOrder = true;
      state.loading = false;
      state.error = false;
    },
    [CREATE_ORDER.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: checkOutActions } = slice;
export const useCheckOutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: checkOutSaga });
  return { actions: slice.actions };
};
