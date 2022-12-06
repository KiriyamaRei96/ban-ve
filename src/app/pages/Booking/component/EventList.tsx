import React, { useState, useEffect } from 'react';
import BookingDate from './BookingDate';
import { useDispatch, useSelector } from 'react-redux';
import { calendar1 } from 'asset/export';
import { eventList as list } from '../slice/selector';
import { GET_TICKETS } from '../slice';
export interface EventListProps {}

const EventList = (props: EventListProps) => {
  const eventList = useSelector(list);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState(eventList[0]?.id || '');
  useEffect(() => {
    const date = startDate.toISOString().split('T')[0];
    if (selected !== '')
      dispatch(
        GET_TICKETS({
          event: selected,
          date,
        }),
      );
  }, [startDate, selected]);
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
              onClick={() => setSelected(event.id)}
              className={
                selected === event.id
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
          <BookingDate startDate={startDate} setStartDate={setStartDate} />
        </div>
      </div>
    </div>
  );
};
export default EventList;
