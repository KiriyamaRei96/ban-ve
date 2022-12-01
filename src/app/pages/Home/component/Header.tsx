import React from 'react';
import { bg, comboShape, en, noti, notification, vn } from 'asset/export';
import { useNavigate } from 'react-router-dom';
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const Navigate = useNavigate();
  return (
    <div className="info d-flex justify-content-between align-items-center">
      <div className="name-tab d-flex align-items-center">
        <img src={comboShape.default} alt="" />
        <h4 className="text-white --name fw-bold mb-0">Sun World Phu Quoc</h4>
      </div>
      <div className="--info d-flex align-items-center">
        <div className="notification">
          <img src={noti.default} alt="" />
          <span className="--number fs-14 text-white">3</span>
          <div className="tab-notifi ">
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
        <div onClick={() => Navigate('Account')} className="avatar">
          <img src={bg} alt="" />
        </div>
        <div className="language d-flex align-items-center">
          <img src={vn.default} alt="" />
          <img src={en} alt="" />
          <select name="" id="">
            <option value="">vn</option>
            <option value="">en</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Header;
