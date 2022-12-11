import { date, search2 } from 'asset/export';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateOption } from '../slice/types';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { searchInfo } from '../slice/selector';
import { historyActions } from '../slice';
import useDebounce from 'utils/hooks/usedebounce';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const Toolbar = ({ options }) => {
  const selected = useSelector(searchInfo)?.orderState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectHandler = e => {
    dispatch(historyActions.setOption(e.target.value));
  };
  const [text, setText] = useState<string>();
  const debounced = useDebounce(text, 200);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  useEffect(() => {
    dispatch(historyActions.setSearch(text));
  }, [debounced]);
  useEffect(() => {
    const from = moment(startDate).format('YYYY-MM-DD');
    const to = moment(endDate).format('YYYY-MM-DD');

    if (from && to !== 'Invalid date')
      dispatch(
        historyActions.setDate({
          fromTime: from,
          toTime: to,
        }),
      );
  }, [startDate, endDate]);
  return (
    <div className="toolbar d-flex justify-content-between mb-3">
      <div className="filter d-flex align-items-center ">
        <div className="search me-2">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
          />
          <img src={search2.default} alt="" />
        </div>
        <div className="day me-2">
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            selectsRange
            onChange={dates => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
          />
          <img src={date.default} alt="" />
        </div>
        <div className="open">
          <select
            onChange={e => selectHandler(e)}
            value={selected}
            placeholder="Phân loại"
            name=""
            id=""
          >
            {options.map((item: StateOption) => (
              <option key={uuid()} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={() => navigate('/')} className="add-ticket">
        <i className="fa-solid fa-plus"></i> <span>New tickets</span>
      </button>
    </div>
  );
};
export default Toolbar;
