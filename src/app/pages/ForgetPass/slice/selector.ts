import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const forgetState = (state: RootState) => state.forgetPass || initialState;
export const email = createSelector([forgetState], state => state.username);
export const loading = createSelector([forgetState], state => state.loading);
export const message = createSelector([forgetState], state => state.message);
export const redirect = createSelector(
  [forgetState],
  state => state.needNavigate,
);

export const pageState = createSelector(
  [forgetState],
  state => state.pageState,
);
