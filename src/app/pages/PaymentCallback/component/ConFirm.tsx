import React from 'react';
import { flatColor, checked } from 'asset/export';
import { useNavigate } from 'react-router-dom';
const Confrim = ({ id, orderState, payment }) => {
  const navigate = useNavigate();
  return (
    <div className="confirm">
      <div className="--icon">
        <img
          src={
            orderState === 'orderstate.status.success'
              ? flatColor.default
              : checked
          }
          alt=""
        />
      </div>
      <h4 className="fw-bold mt-1">
        {orderState === 'orderstate.status.success'
          ? ' Thanh toán thành công!'
          : 'Tạo đơn thành công!'}
      </h4>
      <article
        dangerouslySetInnerHTML={{ __html: payment.description }}
      ></article>
      <div className="button d-flex">
        <button onClick={() => navigate('/')}>Về Booking</button>
        <button onClick={() => navigate(`/History/${id}`)} className="button_1">
          Xem đơn hàng
        </button>
      </div>
    </div>
  );
};
export default Confrim;
