import React from 'react';
import { clear, eyeScanner, mobilePayment, refresh } from 'asset/export';
import { ResponseType } from '../slice/types';
import { v4 as uuid } from 'uuid';
import { numberWithCommas } from 'utils/helper';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loading } from '../slice/selector';
import { Skeleton } from 'antd';
const Table = ({ historyList }) => {
  const navigate = useNavigate();
  const isLoading = useSelector(loading);
  return (
    <>
      <div className="--name d-flex justify-content-between">
        <p className="fs-18">PNR</p>
        <p className="fs-18">Date time</p>
        <p className="fs-18">Flags</p>
        <p className="fs-18">Status</p>
        <p className="fs-18">Payment method</p>
        <p className="fs-18">Quantity</p>
        <p className="fs-18">Amount paid</p>
        <p className="fs-18">Options</p>
      </div>
      {!isLoading ? (
        <div className="table-ticket">
          {historyList.map((item: ResponseType) => (
            <div key={uuid()} className="--item-ticket">
              <div
                onClick={() => navigate(`/History/${item.id}`)}
                className="--name-ticket"
              >
                #{item.id}
              </div>
              <div className="--day-ticket">{item.orderdate.datetime}</div>
              <div className="--flag-ticket">A___</div>
              <div className="--status-ticket   ">
                <p className="mb-0 --item active">
                  {item?.orderState?.replace('orderstate.status.', '')}
                </p>
                {/* <p className="mb-0 --item inactive">Pending</p>
    <p className="mb-0 --item default">Done</p> */}
              </div>
              <div className="--pay-ticket">
                <p className="mb-0 --item active">
                  <img src={mobilePayment.default} alt="" />
                  <span>{item?.payment?.code}</span>
                </p>
              </div>
              <div className="--qua-ticket">200</div>
              <div className="--amount-ticket">
                {numberWithCommas(item.totalPrice)}đ
              </div>
              <div className="--option-ticket">
                <button onClick={() => navigate(`/History/${item.id}`)}>
                  <img src={eyeScanner.default} alt="" />
                </button>
                <button>
                  <img src={refresh.default} alt="" />
                </button>
                <button>
                  <img src={clear.default} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton style={{ height: '100%' }} active />
      )}
    </>
  );
};
export default Table;
