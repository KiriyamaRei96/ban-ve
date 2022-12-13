import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState<any>(null);
  const param = useParams();
  const location = useLocation();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(checkOutActions.setIsOrder());
    if (responseInfo) {
      setData(responseInfo);
    }
    if (!responseInfo) {
      console.log(location);
    }
  }, [responseInfo, location]);

  return (
    <>
      <div className="--content">
        <div className="confirmpay ">
          {data && (
            <Confrim
              id={responseInfo?.id}
              orderState={responseInfo?.orderState}
              payment={responseInfo?.payment}
            />
          )}
          {data && <OrderDetail res={responseInfo} />}
        </div>
      </div>
    </>
  );
}
