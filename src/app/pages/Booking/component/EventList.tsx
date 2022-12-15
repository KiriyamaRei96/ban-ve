import React, { useState, useEffect } from 'react';
import BookingDate from './BookingDate';
import { useDispatch, useSelector } from 'react-redux';
import { date, store } from 'asset/export';
import { parentCategory as list, search } from '../slice/selector';
import { bookingActions, GET_TICKETS } from '../slice';
import moment from 'moment';
import { Empty } from 'antd';
export interface EventListProps {}

const EventList = (props: EventListProps) => {
  const parentCategory = useSelector(list);
  const searchData = useSelector(search);

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<any>(null);

  useEffect(() => {
    if (searchData?.parentCategoryIds && searchData?.date)
      dispatch(GET_TICKETS(searchData));
  }, [searchData]);
  return (
    <div className="--item d-flex flex-column">
      <div className="name-tab d-flex align-items-center">
        <div className="--icon">
          <img src={store} alt="" />
        </div>
        <h6 className="fs-18 --name fw-bold mb-0">LOẠI SẢN PHẨM</h6>
      </div>
      <div className="tab-calendar d-flex flex-column justify-content-between">
        <div className="tab-bar">
          {parentCategory?.data.map(parentCategoryIds => (
            <div
              onClick={() => {
                dispatch(
                  bookingActions.setSearch({
                    parentCategoryIds: parentCategoryIds.value,
                  }),
                );
              }}
              className={
                searchData?.parentCategoryIds == parentCategoryIds.value
                  ? '--item-tab-bar active'
                  : '--item-tab-bar'
              }
            >
              <span>{parentCategoryIds.name || 'sự kiện'} </span>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          ))}
          {!parentCategory?.data && <Empty description="Empty" />}
        </div>
        <div className="calendar">
          <div className="name-tab d-flex align-items-center">
            <div className="--icon">
              <img src={date.default} alt="" />
            </div>
            <h6 className="fs-18 --name fw-bold mb-0">Chọn thời gian</h6>
          </div>
          <BookingDate
            startDate={startDate}
            setStartDate={date => {
              setStartDate(date);
              const output = moment(date).format('YYYY-MM-DD');

              dispatch(bookingActions.setSearch({ date: output }));
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default EventList;
