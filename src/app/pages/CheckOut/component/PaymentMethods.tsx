import React, { useState } from 'react';
import { banking, banking1, money } from 'asset/export';
import { useSelector, useDispatch } from 'react-redux';
import { PaymentMethod } from '../slice/types';
import { paymentMethod, payment } from '../slice/selector';
import { v4 as uuid } from 'uuid';
import { checkOutActions } from '../slice';

export interface PaymentMethodsProps {}

const PaymentMethods = (props: PaymentMethodsProps) => {
  const methodMap = {
    Credit: banking1,
    'Web payment': banking,
    Cash: money,
  };
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
              <img src={method.image.original} alt="" />
              <span>{method.name || method.code}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="--tab-pay mt-3">
        <div className="--item-tabpay">
          <article
            dangerouslySetInnerHTML={{
              __html: paymentMethodList.find(method => method.id === seleted)
                ?.description,
            }}
          ></article>
        </div>
      </div>
    </>
  );
};
export default PaymentMethods;
