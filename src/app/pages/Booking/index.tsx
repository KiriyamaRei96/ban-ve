import React from 'react';
import {
  bg,
  calendar1,
  cartMinus,
  clear,
  clear1,
  search2,
  search3,
  sent,
} from 'asset/export';
export interface BookingProps {}

export function Booking(props: BookingProps) {
  return (
    <div className="--content">
      <div className="booking d-flex ">
        <div className="--item">
          <div className="name-tab d-flex align-items-center">
            <div className="--icon">
              <img src={calendar1.default} alt="" />
            </div>
            <h6 className="fs-18 --name fw-bold mb-0">Event</h6>
          </div>
          <div className="tab-calendar d-flex flex-column justify-content-between">
            <div className="tab-bar">
              <div className="--item-tab-bar active">
                <span> Hòn Thơm Nature Park </span>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
              <div className="--item-tab-bar">
                <span> Hòn Thơm Nature Park </span>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div className="calendar"></div>
          </div>
        </div>
        <div className="--item">
          <div className="name-tab d-flex align-items-center">
            <div className="--item-tab --link fw-bold active">PARK TICKETS</div>
            <div className="--item-tab --link fw-bold">SIGNATURE SHOW</div>
          </div>
          <div className="tab-content">
            <div className="--item-content">
              <div className="search-filter d-flex">
                <div className="search">
                  <img src={search2.default} alt="" />
                  <input type="text" placeholder="Nhập từ khóa" />
                </div>
                <div className="filter">
                  <img src={search3.default} alt="" />
                </div>
              </div>
              <div className="list-ticket mt-3">
                <div className="--item-ticket active">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D Hon Thom 2 Ways Ticket
                    Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="--item-ticket active">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="--item-ticket">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="--item-ticket">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="--item-ticket">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="--item-ticket">
                  <h6 className="fs-18 mb-0 me-2">
                    Hon Thom 2 Ways Ticket Adult 30D
                  </h6>
                  <i className="fa-solid fa-check"></i>
                </div>
              </div>
            </div>
            <div className="--item-content active">
              <h6 className="fs-18 mb-3">
                Ves xem show diễn Signature Show Phú Quốc
              </h6>
              <div className="check mb-4 d-flex justify-content-center">
                <div className="--item-check d-flex align-items-center">
                  <input type="radio" id="time1" name="time" value="" />
                  <label htmlFor="time1">09:30 AM</label>
                </div>
                <div className="--item-check d-flex align-items-center">
                  <input type="radio" id="time2" name="time" value="" />
                  <label htmlFor="time2">09:30 PM</label>
                </div>
              </div>
              <div className="--img">
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="--item">
          <div className="name-tab d-flex align-items-center">
            <div className="--icon">
              <img src={cartMinus.default} alt="" />
            </div>
            <h6 className="fs-18 --name fw-bold mb-0">Cart</h6>
          </div>
          <div className="order d-flex flex-column justify-content-between">
            <div className="list-order">
              <div className="--item-order">
                <div className="--top d-flex justify-content-between">
                  <div className="--name me-3 mb-3">
                    <h6 className="fw-bold mb-0">
                      Hon Thom 2 Ways Ticket Child 30D
                    </h6>
                    <span className="fs-14 mt-1">09:30 AM - ZONE 2</span>
                  </div>
                  <button className="--clear">
                    <img src={clear.default} alt="" />
                  </button>
                </div>
                <div className="--bot d-flex justify-content-between">
                  <div className="--value">800,000đ</div>
                  <div className="--amount">
                    <i className="fa-solid fa-minus"></i>
                    <span className="fw-bold">1</span>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="--money">1,600,000đ</div>
                </div>
              </div>
              <div className="--item-order">
                <div className="--top d-flex justify-content-between">
                  <div className="--name me-3 mb-3">
                    <h6 className="fw-bold mb-0">
                      Hon Thom 2 Ways Ticket Child 30D
                    </h6>
                    <span className="fs-14 mt-1">09:30 AM - ZONE 2</span>
                  </div>
                  <button className="--clear">
                    <img src={clear.default} alt="" />
                  </button>
                </div>
                <div className="--bot d-flex justify-content-between">
                  <div className="--value">800,000đ</div>
                  <div className="--amount">
                    <i className="fa-solid fa-minus"></i>
                    <span className="fw-bold">1</span>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="--money">1,600,000đ</div>
                </div>
              </div>
              <div className="--item-order">
                <div className="--top d-flex justify-content-between">
                  <div className="--name me-3 mb-3">
                    <h6 className="fw-bold mb-0">
                      Hon Thom 2 Ways Ticket Child 30D
                    </h6>
                    <span className="fs-14 mt-1">09:30 AM - ZONE 2</span>
                  </div>
                  <button className="--clear">
                    <img src={clear.default} alt="" />
                  </button>
                </div>
                <div className="--bot d-flex justify-content-between">
                  <div className="--value">800,000đ</div>
                  <div className="--amount">
                    <i className="fa-solid fa-minus"></i>
                    <span className="fw-bold">1</span>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="--money">1,600,000đ</div>
                </div>
              </div>
              <div className="--item-order">
                <div className="--top d-flex justify-content-between">
                  <div className="--name me-3 mb-3">
                    <h6 className="fw-bold mb-0">
                      Hon Thom 2 Ways Ticket Child 30D
                    </h6>
                    <span className="fs-14 mt-1">09:30 AM - ZONE 2</span>
                  </div>
                  <button className="--clear">
                    <img src={clear.default} alt="" />
                  </button>
                </div>
                <div className="--bot d-flex justify-content-between">
                  <div className="--value">800,000đ</div>
                  <div className="--amount">
                    <i className="fa-solid fa-minus"></i>
                    <span className="fw-bold">1</span>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="--money">1,600,000đ</div>
                </div>
              </div>
              <div className="--item-order">
                <div className="--top d-flex justify-content-between">
                  <div className="--name me-3 mb-3">
                    <h6 className="fw-bold mb-0">
                      Hon Thom 2 Ways Ticket Child 30D
                    </h6>
                    <span className="fs-14 mt-1">09:30 AM - ZONE 2</span>
                  </div>
                  <button className="--clear">
                    <img src={clear.default} alt="" />
                  </button>
                </div>
                <div className="--bot d-flex justify-content-between">
                  <div className="--value">800,000đ</div>
                  <div className="--amount">
                    <i className="fa-solid fa-minus"></i>
                    <span className="fw-bold">1</span>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="--money">1,600,000đ</div>
                </div>
              </div>
            </div>
            <div className="card-order d-flex flex-column justify-content-center">
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
              <div className="button d-flex">
                <button className="--clear">
                  <img src={clear1.default} alt="" />
                  <span className="fs-18">Delete cart</span>
                </button>
                <button className="button_1">
                  <img src={sent.default} alt="" />
                  <span className="fs-18">Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
