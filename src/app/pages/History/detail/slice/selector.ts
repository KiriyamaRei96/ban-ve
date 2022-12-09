import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const historyDetailState = (state: RootState) =>
  state.historyDetail || initialState;
export const loading = createSelector(
  [historyDetailState],
  state => state.loading,
);
export const response = createSelector(
  [historyDetailState],
  state => state.response,
);
