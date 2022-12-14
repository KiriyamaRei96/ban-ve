import React, { useEffect, useState } from 'react';
import Confrim from './component/ConFirm';
import OrderDetail from './component/OrderDetail';
import { useSelector, useDispatch } from 'react-redux';
import { response } from '../CheckOut/slice/selector';
import { checkOutActions } from '../CheckOut/slice';
import { useLocation } from 'react-router-dom';
import { BaseXHR } from 'utils/axios';
import Failed from './component/Failed';
export interface PaymentCallbackProps {}

export function PaymentCallback(props: PaymentCallbackProps) {
  const responseInfo = useSelector(response);
  const [data, setData] = useState<any>(null);
  const [success, setSuccess] = useState<any>(undefined);

  const location = useLocation();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(checkOutActions.setIsOrder());
    if (responseInfo) {
      setData(responseInfo);
      setSuccess(undefined);
    }
    if (!responseInfo) {
      const getData = async () => {
        const { data } = await BaseXHR.$get(
          '/vi/api/b2b/v1/payment/callback' + location.search,
        );
        setData(data.order);
        setSuccess(data.success);
      };
      getData().catch(err => console.log(err));
    }
  }, [responseInfo, location]);

  return (
    <>
      <div className="--content">
        <div className="confirmpay ">
          {success === false && <Failed />}
          {success !== false && data && (
            <Confrim
              id={data?.id}
              orderState={data?.orderState}
              payment={data?.payment}
            />
          )}
          {success !== false && data && <OrderDetail res={data} />}
        </div>
      </div>
    </>
  );
}
