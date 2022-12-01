import React from 'react';
import {
  email,
  eyeScanner,
  flatColor,
  prin,
  qr,
  paymentFail,
} from 'asset/export';
export interface PaymentCallbackProps {}

export function PaymentCallback(props: PaymentCallbackProps) {
  return (
    <>
      <div className="--content">
        <div className="confirmpay ">
          <div className="confirm">
            <div className="--icon">
              <img src={flatColor.default} alt="" />
            </div>
            <h4 className="fw-bold mt-1">Thanh toán thành công!</h4>
            <article>
              Bạn đã đặt vé thành công, vui lòng kiểm tra thông tin đơn hàng.
              Mail xác nhận sẽ được gửi về sau ít phút.
            </article>
            <div className="button d-flex">
              <button>Về Booking</button>
              <button className="button_1">Xem đơn hàng</button>
            </div>
          </div>
          <div className="confirmpay fail d-none">
            <div className="confirm">
              <div className="--icon">
                <img src={paymentFail.default} alt="" />
              </div>
              <h4 className="fw-bold mt-1">Thanh toán thành công!</h4>
              <article>
                Bạn đã đặt vé thành công, vui lòng kiểm tra thông tin đơn hàng.
                Mail xác nhận sẽ được gửi về sau ít phút.
              </article>
              <div className="button d-flex">
                <button>Về Booking</button>
                <button className="button_1">Xem đơn hàng</button>
              </div>
            </div>
          </div>
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
                        <a
                          className=""
                          data-bs-toggle="modal"
                          href="#exampleModalToggle"
                          role="button"
                        >
                          <img src={eyeScanner.default} alt="" />
                        </a>
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
      </div>
      <div
        className="modal fade modal-ticket"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        // tabIndex={'-1'}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close" data-bs-dismiss="modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-body">
              <div className="modal-list">
                <div className="--item-modal">
                  <h6 className="--name fw-bold">
                    Vé xem biểu diễn signature show Phú Quốc
                  </h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Zone </span>
                      <span>1</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>GG 22</span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
                <div className="--item-modal">
                  <h6 className="--name fw-bold">
                    Vé xem biểu diễn signature show Phú Quốc
                  </h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Zone </span>
                      <span>1</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>GG 22</span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
                <div className="--item-modal">
                  <h6 className="--name fw-bold">
                    Vé xem biểu diễn signature show Phú Quốc
                  </h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Zone </span>
                      <span>1</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>GG 22</span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
                <div className="--item-modal">
                  <h6 className="--name fw-bold">
                    Vé xem biểu diễn signature show Phú Quốc
                  </h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Zone </span>
                      <span>1</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>GG 22</span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
                <div className="--item-modal">
                  <h6 className="--name fw-bold">
                    Vé xem biểu diễn signature show Phú Quốc
                  </h6>
                  <ul>
                    <li>
                      <span>Date: </span>
                      <span>12/12/2020</span>
                    </li>
                    <li>
                      <span>Show time: </span>
                      <span>09:30 PM</span>
                    </li>
                    <li>
                      <span>Standard</span>
                    </li>
                    <li>
                      <span>Zone </span>
                      <span>1</span>
                    </li>
                    <li>
                      <span>Seat: </span>
                      <span>GG 22</span>
                    </li>
                  </ul>
                  <div className="--qr">
                    <img src={qr} alt="" />
                  </div>
                </div>
              </div>
              <div className="button d-flex justify-content-between">
                <div className="bttn">
                  <button className="--btn">
                    <img src={email.default} alt="" />
                    <span>Send Email</span>
                  </button>
                  <button className="--btn">
                    <img src={prin.default} alt="" />
                    <span>Print Ticket</span>
                  </button>
                </div>
                <div className="arrow_modal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
