import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const notification = (state: RootState) => state.notifications || initialState;
export const selectNotifications = createSelector(
  [notification],
  state => state,
);
