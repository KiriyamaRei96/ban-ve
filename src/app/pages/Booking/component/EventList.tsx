import React, { useState, useEffect } from 'react';
import BookingDate from './BookingDate';
import { useDispatch, useSelector } from 'react-redux';
import { calendar1 } from 'asset/export';
import { eventList as list, search } from '../slice/selector';
import { bookingActions, GET_TICKETS } from '../slice';
import moment from 'moment';
export interface EventListProps {}

const EventList = (props: EventListProps) => {
  const eventList = useSelector(list);
  const searchData = useSelector(search);

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<any>(null);

  useEffect(() => {
    if (searchData?.event && searchData?.date)
      dispatch(GET_TICKETS(searchData));
  }, [searchData]);
  return (
    <div className="--item d-flex flex-column">
      <div className="name-tab d-flex align-items-center">
        <div className="--icon">
          <img src={calendar1.default} alt="" />
        </div>
        <h6 className="fs-18 --name fw-bold mb-0">Event</h6>
      </div>
      <div className="tab-calendar d-flex flex-column justify-content-between">
        <div className="tab-bar">
          {eventList.map(event => (
            <div
              onClick={() => {
                dispatch(bookingActions.setSearch({ event: event.id }));
              }}
              className={
                searchData?.event === event.id
                  ? '--item-tab-bar active'
                  : '--item-tab-bar'
              }
            >
              <span>{event.name || 'sự kiện'} </span>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          ))}
          {/* <div className="--item-tab-bar active">
            <span> Hòn Thơm Nature Park </span>
            <i className="fa-solid fa-chevron-right"></i>
          </div> */}
        </div>
        <div className="calendar">
          <BookingDate
            startDate={startDate}
            setStartDate={date => {
              setStartDate(date);
              const output = moment(date).format('YYYY-MM-DD');

              dispatch(bookingActions.setSearch({ date: output }));

              dispatch(bookingActions.cartClear());
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default EventList;
