import React from 'react';
import { email, prin } from 'asset/export';

import InfoTicket from 'app/pages/App/component/InfoTicket';

const OrderDetail = ({ res }) => {
  return (
    <>
      <div className="confirm-oder">
        <div className="--top d-flex align-items-center justify-content-between">
          <h5 className="fw-bold mb-0">Order Detail</h5>
          <div className="button d-flex">
            <button>
              <img src={prin.default} alt="" />
              <span>Print Ticket</span>
            </button>
            <button>
              <img src={email.default} alt="" />
              <span>Send email</span>
            </button>
          </div>
        </div>
        <InfoTicket res={res} />
      </div>
    </>
  );
};
export default OrderDetail;
