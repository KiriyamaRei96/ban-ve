import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appLoading, currentPark, isLogged } from '../App/slice/selector';
import EventList from './component/EventList';
import Tickets from './component/Tickets';
import Cart from './component/Cart';
import { GET_EVENTS, GET_TICKETS, useBookingSlice } from './slice';
import { Skeleton } from 'antd';

export interface BookingProps {}
export function Booking(props: BookingProps) {
  const { actions } = useBookingSlice();

  const dispatch = useDispatch();
  const isLoged = useSelector(isLogged);
  const current = useSelector(currentPark);
  const isLoading = useSelector(appLoading);

  useEffect(() => {
    if (isLoged) {
      dispatch(GET_TICKETS({}));
    }
  }, [isLoged, current]);
  return (
    <div className="--content">
      <div className="booking d-flex ">
        {!isLoading ? <EventList /> : <Skeleton active />}
        {!isLoading ? <Tickets /> : <Skeleton active />}
        {!isLoading ? <Cart /> : <Skeleton active />}
      </div>
    </div>
  );
}
