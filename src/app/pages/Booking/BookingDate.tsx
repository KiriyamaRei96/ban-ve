import React from 'react';
import DatePicker from 'react-datepicker';

const BookingDate = ({ startDate, setStartDate }) => {
  return <DatePicker className={'calendar'} inline selected={startDate} />;
};
export default BookingDate;
