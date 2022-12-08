import * as React from 'react';
import { paymentFail } from 'asset/export';
export interface FailedProps {}

const Failed = (props: FailedProps) => {
  return (
    <div className="confirmpay fail ">
      <div className="confirm">
        <div className="--icon">
          <img src={paymentFail.default} alt="" />
        </div>
        <h4 className="fw-bold mt-1">Thanh toán không thành công!</h4>
        <article>
          Rất tiếc! Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng kiểm
          tra lại thông tin tài khoản và thực hiện lại.
        </article>
        <div className="button d-flex">
          <button>Về Booking</button>
          <button className="button_1">Thử lại</button>
        </div>
      </div>
    </div>
  );
};
export default Failed;
