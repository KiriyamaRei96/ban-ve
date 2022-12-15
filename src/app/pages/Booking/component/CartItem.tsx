import React, { useState, useEffect, useRef, memo } from 'react';
import { clear } from 'asset/export';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { numberWithCommas } from 'utils/helper';
import { bookingActions } from '../slice';
import { debounce } from 'lodash';
import { search } from '../slice/selector';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(item?.amount);
  const prvAmount = useRef(item?.amount);

  useEffect(() => {
    if (prvAmount.current !== amount && amount >= 1)
      dispatch(
        bookingActions.cartUpdateAmount({
          uid: item.uid,
          amount,
        }),
      );
  }, [amount]);
  const deleteHandler = id => {
    dispatch(bookingActions.cartDelete(id));
  };

  return (
    <div key={uuid()} className="--item-order">
      <div className="--top d-flex justify-content-between">
        <div className="--name me-3 mb-3">
          <h6 className="fw-bold mb-0">{item?.name}</h6>
          <span className="fs-14 mt-1">{item?.date}</span>
        </div>
        <button onClick={() => deleteHandler(item?.uid)} className="--clear">
          <img src={clear.default} alt="" />
        </button>
      </div>
      <div className="--bot d-flex justify-content-between">
        <div className="--value">{numberWithCommas(item?.price)}đ</div>
        <div className="--amount">
          <i
            onClick={() => {
              if (amount > 1) setAmount(amount - 1);
            }}
            className="fa-solid fa-minus"
          ></i>
          <span className="fw-bold">{amount}</span>

          <i
            onClick={() => {
              setAmount(amount + 1);
            }}
            className="fa-solid fa-plus"
          ></i>
        </div>
        <div className="--money">
          {item?.price && numberWithCommas(item?.price * item?.amount)}đ
        </div>
      </div>
    </div>
  );
};
export default memo(CartItem);
