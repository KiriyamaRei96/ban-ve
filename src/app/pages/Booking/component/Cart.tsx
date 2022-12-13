import React, { useEffect, useState, memo } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartMinus, clear, clear1, sent } from 'asset/export';
import { cartList } from '../slice/selector';
import { numberWithCommas } from 'utils/helper';
import { CartItemType } from '../slice/types';
import { bookingActions } from '../slice';
import CartItem from './CartItem';

export interface CartProps {}

const Cart = (props: CartProps) => {
  const cart = useSelector(cartList);
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let totalPay = 0;
    cart.forEach((item, id) => {
      totalPay += item.price * item.amount;
    });
    setTotal(totalPay);
  }, [cart]);

  const clearHandler = () => {
    dispatch(bookingActions.cartClear());
  };
  return (
    <div className="--item">
      <div className="name-tab d-flex align-items-center">
        <div className="--icon">
          <img src={cartMinus.default} alt="" />
        </div>
        <h6 className="fs-18 --name fw-bold mb-0">Cart</h6>
      </div>
      <div className="order d-flex flex-column justify-content-between">
        <div className="list-order">
          {cart.map((item: CartItemType) => (
            <CartItem key={uuid()} item={item} />
          ))}
        </div>
        <div className="card-order d-flex flex-column justify-content-center">
          <div className="billplease">
            <div className="--item-bill d-flex justify-content-between align-items-center">
              <span>Amount due</span>
              <span className="--money">{numberWithCommas(total)}đ</span>
            </div>
            <div className="--item-bill d-flex justify-content-between align-items-center">
              <span>Amount paid</span>
              <span className="--money">0đ</span>
            </div>
            <div className="--item-bill d-flex justify-content-between align-items-center">
              <span>Amount Remaining</span>
              <span className="--money">{numberWithCommas(total)}đ</span>
            </div>
          </div>
          <div className="button d-flex">
            <button onClick={clearHandler} className="--clear">
              <img src={clear1.default} alt="" />
              <span className="fs-18">Delete cart</span>
            </button>
            <button
              onClick={() => navigate('/CheckOut')}
              disabled={cart.length === 0}
              className="button_1"
            >
              <img src={sent.default} alt="" />
              <span className="fs-18">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Cart);
