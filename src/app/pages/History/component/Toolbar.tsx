import { date, search2 } from 'asset/export';
import React, { useEffect, useState } from 'react';
import { StateOption } from '../slice/types';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { searchInfo } from '../slice/selector';
import { historyActions } from '../slice';
import useDebounce from 'utils/hooks/usedebounce';

const Toolbar = ({ options }) => {
  const selected = useSelector(searchInfo)?.orderState;
  const dispatch = useDispatch();
  const selectHandler = e => {
    dispatch(historyActions.setOption(e.target.value));
  };
  const [text, setText] = useState<string>();
  const debounced = useDebounce(text, 200);

  useEffect(() => {
    dispatch(historyActions.setSearch(text));
  }, [debounced]);
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
          <input type="text" />
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
      <button className="add-ticket">
        <i className="fa-solid fa-plus"></i> <span>New tickets</span>
      </button>
    </div>
  );
};
export default Toolbar;
