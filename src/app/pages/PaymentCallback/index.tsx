import React, { useEffect } from 'react';
import Confrim from './component/ConFirm';
import OrderDetail from './component/OrderDetail';
import { useSelector, useDispatch } from 'react-redux';
import { response } from '../CheckOut/slice/selector';
import { useParams } from 'react-router-dom';
import { checkOutActions } from '../CheckOut/slice';
import { useLocation } from 'react-router-dom';
import { ResponseType } from '../CheckOut/slice/types';
export interface PaymentCallbackProps {}

export function PaymentCallback(props: PaymentCallbackProps) {
  const responseInfo = useSelector(response);
  const param = useParams();
  const location = useLocation();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(checkOutActions.setIsOrder());
  }, [responseInfo, param.info]);

  return (
    <>
      <div className="--content">
        <div className="confirmpay ">
          <Confrim
            id={responseInfo?.id}
            orderState={responseInfo?.orderState}
          />
          <OrderDetail res={responseInfo} />
        </div>
      </div>
    </>
  );
}
