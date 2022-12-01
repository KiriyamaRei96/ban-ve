import React from 'react';
import { clear, edit, email, eyeScanner, prin, sent } from 'asset/export';
export interface HistorydetailProps {}

export function Historydetail(props: HistorydetailProps) {
  return (
    <div className="--content">
      <div className="historydetail ">
        <div className="--top mb-3 d-flex align-items-center justify-content-between">
          <div className="--name d-flex align-items-center">
            <div className="--back me-3">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <h5 className="fw-bold mb-0">Order Detail</h5>
          </div>
          <div className="button d-flex">
            <button>
              <img src={prin.default} alt="" />
              <span>Print Ticket</span>
            </button>
            <button>
              <img src={email.default} alt="" />
              <span>Send email</span>
            </button>
            <button>
              <img src={edit.default} alt="" />
              <span>edit</span>
            </button>
            <button>
              <img src={clear.default} alt="" />
              <span>delete</span>
            </button>
          </div>
        </div>
        <div className="info-ticket">
          <div className="row">
            <div className="col-md-9">
              <div className="--info d-flex fs-14">
                <ul>
                  <li>
                    <span>PNR</span>
                    <span>#1363794</span>
                  </li>
                  <li>
                    <span>Flags</span>
                    <span>A____</span>
                  </li>
                  <li>
                    <span>Status</span>
                    <span>Pending</span>
                  </li>
                  <li>
                    <span>Sale Chanel</span>
                    <span>B2B</span>
                  </li>
                  <li>
                    <span>Payment method</span>
                    <span>Cash</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>Owner</span>
                    <span>Công ty cổ phần tập đoàn Mặt TRời</span>
                  </li>
                  <li>
                    <span>Date/Time</span>
                    <span>2022/07/28 05:00</span>
                  </li>
                  <li>
                    <span>Facility</span>
                    <span>Sun World Hòn Thơm Nature Park</span>
                  </li>
                  <li>
                    <span>Visit date</span>
                    <span>2022/07/28 05:00</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>3 items</span>
                  </li>
                </ul>
              </div>
              <div className="tabble-ticket">
                <div className="--item-tableticket">
                  <p>View</p>
                  <p>ITEMS</p>
                  <p>Unit amount/Taxes</p>
                  <p>Quantity</p>
                  <p>Total amount /Taxes</p>
                </div>
                <div className="--item-tableticket">
                  <p>
                    <img src={eyeScanner.default} alt="" />
                  </p>
                  <p>
                    <span>Vé Hòn Thơm 1 Chiều 30D NL</span>
                    <span>09:30 AM - ZONE 2 - G1, G2</span>
                  </p>
                  <p>
                    <span>800,000đ</span>
                    <span>30,000đ</span>
                  </p>
                  <p>x2</p>
                  <p>
                    <span>1,600,000đ</span>
                    <span>60,000đ</span>
                  </p>
                </div>
                <div className="--item-tableticket">
                  <p>
                    <img src={eyeScanner.default} alt="" />
                  </p>
                  <p>
                    <span>Vé Hòn Thơm 1 Chiều 30D NL</span>
                    <span>09:30 AM - ZONE 2 - G1, G2</span>
                  </p>
                  <p>
                    <span>800,000đ</span>
                    <span>30,000đ</span>
                  </p>
                  <p>x2</p>
                  <p>
                    <span>1,600,000đ</span>
                    <span>60,000đ</span>
                  </p>
                </div>
                <div className="--item-tableticket">
                  <p>
                    <img src={eyeScanner.default} alt="" />
                  </p>
                  <p>
                    <span>Vé Hòn Thơm 1 Chiều 30D NL</span>
                    <span>09:30 AM - ZONE 2 - G1, G2</span>
                  </p>
                  <p>
                    <span>800,000đ</span>
                    <span>30,000đ</span>
                  </p>
                  <p>x2</p>
                  <p>
                    <span>1,600,000đ</span>
                    <span>60,000đ</span>
                  </p>
                </div>
                <div className="billplease">
                  <div className="--item-bill d-flex justify-content-between align-items-center">
                    <span>Amount due</span>
                    <span className="--money">14,400,000đ</span>
                  </div>
                  <div className="--item-bill d-flex justify-content-between align-items-center">
                    <span>Amount paid</span>
                    <span className="--money">0đ</span>
                  </div>
                  <div className="--item-bill d-flex justify-content-between align-items-center">
                    <span>Amount Remaining</span>
                    <span className="--money">14,400,000đ</span>
                  </div>
                </div>
              </div>
              <div className="bttn mt-2 d-flex justify-content-end">
                <button className="button_1">
                  <img src={sent.default} alt="" /> <span>Payment</span>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form">
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Operator Name{' '}
                  </label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Name
                  </label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Mobile
                  </label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Group code
                  </label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Nationality
                  </label>
                  <input type="text" />
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Note
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
