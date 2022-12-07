import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const bookingState = (state: RootState) => state.booking || initialState;

export const eventList = createSelector(
  [bookingState],
  state => state.eventList,
);
export const loading = createSelector([bookingState], state => state.loading);
export const ticketList = createSelector(
  [bookingState],
  state => state.ticketList,
);
export const startDate = createSelector(
  [bookingState],
  state => state.startDate,
);
export const cartList = createSelector([bookingState], state => state.cart);
