import React from 'react';
import { bg, camera, edit } from 'asset/export';
export interface AccountProps {}

export function Account(props: AccountProps) {
  return (
    <div className="--content">
      <div className="account ">
        <div className="row">
          <div className="col-md-3">
            <div className="--infouser d-flex flex-column align-items-center text-center">
              <div className="avatar">
                <div className="--img">
                  <img src={bg} alt="" />
                </div>
                <button>
                  <img src={camera.default} alt="" />
                </button>
              </div>
              <div className="--txt">
                <h6 className="mb-0 fw-bold">Công ty cổ phần ABC</h6>
                <span>Info@abc.com.vn</span>
              </div>
            </div>
            <div className="--value">
              <div className="--title mb-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Balance</h5>
                <a href="">
                  {' '}
                  <i className="fa-solid fa-arrow-rotate-right"></i>{' '}
                  <span className="fs-18 ms-2">Refresh</span>
                </a>
              </div>
              <ul>
                <li>
                  <span>Balance</span>
                  <span>-150,000,000đ</span>
                </li>
                <li>
                  <span>Total Available</span>
                  <span>26,080,000đ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="info-accounuser">
              <div className="--top d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Profile</h5>
                <button>
                  <img src={edit.default} alt="" />
                  <span>Edit</span>
                </button>
              </div>
              <div className="--infoaccount">
                <div className="--item-account">
                  <h6 className="fs-14">Infomation of tour guide</h6>
                  <div className="form_info d-flex flex-wrap justify-content-between">
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Name</label>
                      <input type="text" placeholder="Nguyễn văn A" />
                    </div>
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Phone</label>
                      <input type="text" />
                    </div>
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="--item-account">
                  <h6 className="fs-14">Infomation of tour guide</h6>
                  <div className="form_info d-flex flex-wrap justify-content-between">
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Name</label>
                      <input type="text" placeholder="Nguyễn văn A" />
                    </div>
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Phone</label>
                      <input type="text" />
                    </div>
                    <div className="form-group d-flex flex-column">
                      <label htmlFor="">Email</label>
                      <input type="text" />
                    </div>
                    <div className="form-group d-flex flex-column w-100">
                      <label htmlFor="">Address</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
