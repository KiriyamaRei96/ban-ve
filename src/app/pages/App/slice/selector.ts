import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const notification = (state: RootState) => state.notifications || initialState;
const globalState = (state: RootState) => state.app || initialState;

export const selectNotifications = createSelector(
  [notification],
  state => state,
);
export const appLoading = createSelector([globalState], state => state.loading);
export const isLogged = createSelector([globalState], state => state.isLogged);
export const userInfo = createSelector([globalState], state => state.userInfo);
export const currentPark = createSelector(
  [globalState],
  state => state.currentPark,
);
export const parkArr = createSelector([globalState], state => state.parkArr);
