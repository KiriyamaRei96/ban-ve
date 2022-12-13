import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { createRoutine } from 'redux-saga-routines';
import { bookingSaga } from './saga';
import { BookingState, CartItemType } from './types';
export const GET_EVENTS = createRoutine('booking/getEvents');
export const GET_TICKETS = createRoutine('booking/getTickers');

export const initialState: BookingState = {
  ticketList: [],
  cart: [],
  loading: false,
  error: false,
};
const slice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = { ...state.search, ...action.payload };
    },
    clearSearch: state => {
      state.search = {};
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    cartAdd: (state, action: PayloadAction<CartItemType>) => {
      state.cart.push(action.payload);
    },
    cartDelete: (state, action) => {
      state.cart = state.cart.filter(item => item.uid !== action.payload);
    },
    cartClear: state => {
      state.cart = [];
    },
    cartUpdateAmount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.uid === action.payload.uid) {
          item.amount = action.payload.amount;
          return item;
        }
        return item;
      });
    },
  },
  extraReducers: {
    // [GET_EVENTS.TRIGGER]: state => {
    //   state.loading = true;
    //   state.error = false;
    // },
    // [GET_EVENTS.SUCCESS]: (state, actions: any) => {
    //   state.eventList = actions.payload;

    //   state.loading = false;
    //   state.error = false;
    // },
    // [GET_EVENTS.FAILURE]: state => {
    //   state.loading = false;
    //   state.error = true;
    // },
    [GET_TICKETS.TRIGGER]: state => {
      state.loading = true;
      state.error = false;
    },
    [GET_TICKETS.SUCCESS]: (state, actions: any) => {
      state.ticketList = actions.payload.data;
      state.filter = actions.payload.filters;
      state.loading = false;
      state.error = false;
    },
    [GET_TICKETS.FAILURE]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { actions: bookingActions } = slice;
export const useBookingSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: bookingSaga });
  return { actions: slice.actions };
};
