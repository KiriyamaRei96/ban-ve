import React, { useEffect, useState } from 'react';
import { iconClock, sent } from 'asset/export';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartList } from 'app/pages/Booking/slice/selector';
import { CartItemType } from 'app/pages/Booking/slice/types';
import { numberWithCommas } from 'utils/helper';
import { loading } from '../slice/selector';
import { Spin } from 'antd';
import Countdown from 'react-countdown';
import { bookingActions } from 'app/pages/Booking/slice';
import { appActions } from 'app/pages/App/slice';
import { store } from 'index';
import { notify } from 'reapop';

const PayCard = ({ form }) => {
  const cart = useSelector(cartList);
  const isLoading = useSelector(loading);
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
  return (
    <div className="col-md-3">
      <div className="pay-card">
        <div className="--time mb-3 d-flex">
          <div className="--icon">
            <img src={iconClock.default} alt="" />
          </div>
          <div className="--txt">
            <p>Thời gian thanh toán còn lại</p>
            <div className="--hour">
              <Countdown
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="--number d-flex justify-content-between">
                      <div className="--item d-flex flex-column">
                        <span>{hours >= 10 ? hours : `0${hours}`}</span>
                        <span className="fs-12">Giờ</span>
                      </div>
                      <div className="--item d-flex flex-column">
                        <span>{minutes >= 10 ? minutes : `0${minutes}`}</span>
                        <span className="fs-12">Phút</span>
                      </div>
                      <div className="--item d-flex flex-column">
                        <span>{seconds >= 10 ? seconds : `0${seconds}`}</span>
                        <span className="fs-12">Giây</span>
                      </div>
                    </div>
                  );
                }}
                date={Date.now() + 900000}
                onComplete={() => {
                  dispatch(bookingActions.cartClear());
                  dispatch(
                    store.dispatch(
                      notify('', 'warning', {
                        title: 'Hết thời gian thanh toán',
                        dismissAfter: 5000,
                      }),
                    ),
                  );
                  navigate('/');
                }}
              />
            </div>
          </div>
        </div>
        <div className="pay-order">
          <h6 className="--title fw-bold fs-14">Order Detail</h6>
          <div className="list-order">
            {cart.map((item: CartItemType) => (
              <div className="--item-order">
                <h6 className="--name mb-1 fs-14 d-flex flex-column">
                  <span>{item.name}</span>
                  <span className="fs-12">09:30 AM - ZONE 2</span>
                </h6>
                <div className="--number d-flex justify-content-between">
                  <div className="parameter d-flex">
                    <div className="--value fs-14">
                      {numberWithCommas(item.price)}đ
                    </div>
                    <div className="--amount fs-14">x{item.amount}</div>
                  </div>
                  <div className="--money fs-14">
                    {numberWithCommas(item.price && item.price * item.amount)}đ
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="billplease fs-14">
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
          <button
            onClick={() => {
              form.submit();
            }}
            className="button_1"
          >
            {!isLoading ? (
              <>
                <img src={sent.default} alt="" />
                <span className="fs-18">Order Now</span>
              </>
            ) : (
              <Spin />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PayCard;
