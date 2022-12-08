import React from 'react';
import { flatColor, checked } from 'asset/export';
import { useNavigate } from 'react-router-dom';
const Confrim = ({ id, orderState }) => {
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
      <article>
        {orderState === 'orderstate.status.success'
          ? 'Bạn đã đặt vé thành công, vui lòng kiểm tra thông tin đơn hàng. Mail xác nhận sẽ được gửi về sau ít phút.'
          : 'Đơn hàng của bạn đã được khởi tạo. Bạn có 60 phút để đến quầy thanh toán. Sau khoảng thời gian này, nếu bạn chưa hoàn tất giao dịch, đơn hàng của bạn sẽ bị hủy. Xem danh sách quầy tại đây.'}
      </article>
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
