import React from 'react';
import { flatColor, checked, Pending } from 'asset/export';
import { useNavigate } from 'react-router-dom';
const Confrim = ({ id, orderState, payment }) => {
  const navigate = useNavigate();
  const stateMap = {
    success: {
      img: flatColor.default,
      text: 'Thanh toán thành công!',
      color: '#5C9A45',
    },
    paymentPending: { img: Pending, text: 'Chờ xử lý!', color: '#FF6B00' },
  };
  return (
    <div className="confirm">
      <div className="--icon">
        <img src={stateMap[orderState.value].img} alt="" />
      </div>
      <h4
        style={{ color: stateMap[orderState.value].color }}
        className="fw-bold mt-1"
      >
        {stateMap[orderState.value].text}
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
