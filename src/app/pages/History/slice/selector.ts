import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const checkOutState = (state: RootState) => state.history || initialState;
export const loading = createSelector([checkOutState], state => state.loading);
