import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const checkOutState = (state: RootState) => state.checkOut || initialState;
export const loading = createSelector([checkOutState], state => state.loading);
export const isOrder = createSelector([checkOutState], state => state.isOrder);
export const response = createSelector(
  [checkOutState],
  state => state.response,
);

export const paymentMethod = createSelector(
  [checkOutState],
  state => state.paymentMethodList,
);
export const payment = createSelector(
  [checkOutState],
  state => state.selectedMethod,
);
