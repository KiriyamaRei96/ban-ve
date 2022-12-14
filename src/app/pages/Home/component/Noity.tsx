import { noti, notification } from 'asset/export';
import React, { useState } from 'react';

export interface NoityProps {}

const Noity = (props: NoityProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="notification">
      <img onClick={() => setActive(!active)} src={noti.default} alt="" />
      <span className="--number fs-14 text-white">3</span>
      <div className={active ? 'tab-notifi active' : 'tab-notifi'}>
        <div className="list-notifi ">
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
          <div className="--item-notifi">
            <div className="--icon">
              <img src={notification.default} alt="" />
            </div>
            <div className="--txt">
              <h6 className="mb-0">
                Thanh toán thành công đơn hàng{' '}
                <a href="" className="fw-bold">
                  #13232
                </a>
              </h6>
              <div className="--time fs-12">28/11/2022 09:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Noity;
