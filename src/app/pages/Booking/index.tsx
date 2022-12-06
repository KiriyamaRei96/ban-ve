import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartMinus, clear, clear1, sent } from 'asset/export';
import BookingDate from './component/BookingDate';
import { isLogged } from '../App/slice/selector';
import EventList from './component/EventList';
import Tickets from './component/Tickets';
import Cart from './component/Cart';
import { GET_EVENTS, useBookingSlice } from './slice';

export interface BookingProps {}
export function Booking(props: BookingProps) {
  const { actions } = useBookingSlice();

  const dispatch = useDispatch();
  const isLoged = useSelector(isLogged);
  useEffect(() => {
    if (isLoged) {
      dispatch(GET_EVENTS({ park: '143' }));
    }
  }, [isLoged]);
  return (
    <div className="--content">
      <div className="booking d-flex ">
        <EventList />
        <Tickets />
        <Cart />
      </div>
    </div>
  );
}
