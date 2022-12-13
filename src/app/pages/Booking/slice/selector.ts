import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const bookingState = (state: RootState) => state.booking || initialState;

export const loading = createSelector([bookingState], state => state.loading);
export const search = createSelector([bookingState], state => state.search);
export const ticketList = createSelector(
  [bookingState],
  state => state.ticketList,
);
export const parentCategory = createSelector(
  [bookingState],
  state => state.filter?.parentCategoryIds,
);
export const performances = createSelector(
  [bookingState],
  state => state.filter?.performances,
);
export const Shows = createSelector(
  [bookingState],
  state => state.filter?.shows,
);
export const startDate = createSelector(
  [bookingState],
  state => state.startDate,
);
export const cartList = createSelector([bookingState], state => state.cart);
