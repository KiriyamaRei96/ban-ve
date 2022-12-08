import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const historyState = (state: RootState) => state.history || initialState;
export const loading = createSelector([historyState], state => state.loading);
export const searchInfo = createSelector([historyState], state => state.search);
export const pagination = createSelector(
  [historyState],
  state => state.pagination,
);
export const opitons = createSelector(
  [historyState],
  state => state.orderStateOption,
);
export const historyArr = createSelector(
  [historyState],
  state => state.historyList,
);
