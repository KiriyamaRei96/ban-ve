import React from 'react';
import DatePicker from 'react-datepicker';

const BookingDate = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      minDate={Date.now()}
      highlightDates={[new Date(), 0]}
      inline
      selected={startDate}
      onChange={date => {
        setStartDate(date);
      }}
    />
  );
};
export default BookingDate;
