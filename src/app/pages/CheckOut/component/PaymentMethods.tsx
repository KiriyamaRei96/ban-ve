import React, { useState } from 'react';
import { banking, banking1, money } from 'asset/export';
import { useSelector, useDispatch } from 'react-redux';
import { PaymentMethod } from '../slice/types';
import { paymentMethod, payment } from '../slice/selector';
import { v4 as uuid } from 'uuid';
import { checkOutActions } from '../slice';

export interface PaymentMethodsProps {}

const PaymentMethods = (props: PaymentMethodsProps) => {
  const dispatch = useDispatch();
  const paymentMethodList = useSelector(paymentMethod);
  const seleted = useSelector(payment);
  return (
    <>
      <div className="--paymentmethods">
        <h5>Payment method</h5>
        <div className="--payment">
          {paymentMethodList.map((method: PaymentMethod) => (
            <button
              key={uuid()}
              onClick={() => dispatch(checkOutActions.setSelected(method.id))}
              className={method.id === seleted ? '--pay active' : '--pay'}
            >
              <img src={banking.default} alt="" />
              <span>{method.name || method.code}</span>
            </button>
          ))}
          {/* 
          <button
            onClick={() => setActive('online')}
            className={active === 'online' ? '--pay active' : '--pay'}
          >
            <img src={banking1.default} alt="" />
            <span>Thanh toán Online</span>
          </button>
          <button
            onClick={() => setActive('cash')}
            className={active === 'cash' ? '--pay active' : '--pay'}
          >
            <img src={money.default} alt="" />
            <span>Tiền mặt</span>
          </button> */}
        </div>
      </div>
      <div className="--tab-pay mt-3">
        {/* {active === 'banking' ? (
          <div className="--item-tabpay">
            <article>abcxyz</article>
          </div>
        ) : (
          false
        )}

        {active === 'online' ? (
          <div className="--item-tabpay">
            <ul className="--price">
              <li>
                <span>Balance:</span>
                <span>-150,000,000VND</span>
              </li>
              <li>
                <span>Total Available:</span>
                <span>1,050,000,000VND</span>
              </li>
            </ul>
          </div>
        ) : (
          false
        )}

        {active === 'cash' ? (
          <div className="--item-tabpay">
            <article>
              Lưu ý:
              <br />
              Với hình thức thanh toán bằng tiền mặt, quý khách hàng có 60 phút
              để tới quầy hoàn tất giao dịch.
            </article>
          </div>
        ) : (
          false
        )} */}
      </div>
    </>
  );
};
export default PaymentMethods;
