import * as React from 'react';

export interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <div className="bb d-flex">
        <div className="--left h-100">
          <div className="logo d-flex justify-content-center align-items-center">
            <img src="../img/logo-am ban 1.png" alt="" />
          </div>
          <div className="tab-menu d-flex flex-column justify-content-between">
            <div className="menu" id="accordion">
              <div className="card">
                <div className="card-header p-0" id="headingOne">
                  <button
                    className="btn d-flex justify-content-between text-white"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h6 className="fs-18 mb-0 fw-bold">Sun World Phu Quoc</h6>
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <div
                  id="collapseOne"
                  className="collapse mt-2 show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="--sub-menu d-flex flex-column">
                    <a href="" className="--item-sub text-white fs-14 active">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                  </div>
                </div>
                <div className="--tab mt-3">
                  <div className="--item-tab --link active">
                    <img src="../img/calendar-check.svg" alt="" />
                    <h6 className="fs-18 text-white mb-0">Booking</h6>
                  </div>
                  <div className="--item-tab --link">
                    <img src="../img/ticket.svg" alt="" />
                    <h6 className="fs-18 text-white mb-0">My Order</h6>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0" id="headingTwo">
                  <button
                    className="btn d-flex justify-content-between text-white collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h6 className="fs-18 mb-0 fw-bold">Sun World Phu Quoc</h6>
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse mt-2"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="--sub-menu d-flex flex-column">
                    <a href="" className="--item-sub text-white fs-14 active">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                    <a href="" className="--item-sub text-white fs-14">
                      <span>Sun World Ba Na Hills</span>
                      <i className="fa-solid fa-check"></i>
                    </a>
                  </div>
                </div>
                <div className="--tab mt-3">
                  <div className="--item-tab --link">
                    <img src="../img/calendar-check.svg" alt="" />
                    <h6 className="fs-18 text-white mb-0">Booking</h6>
                  </div>
                  <div className="--item-tab --link">
                    <img src="../img/ticket.svg" alt="" />
                    <h6 className="fs-18 text-white mb-0">My Order</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards d-flex flex-column justify-content-between">
              <img src="../img/Masks.svg" alt="" />
              <div className="--txt d-flex justify-content-between">
                <span className="fs-14 text-white">Balance</span>
                <a className="--link --refresh" href="">
                  <i className="fa-solid fa-arrow-rotate-right"></i>
                  <span className="fs-14">Refresh</span>
                </a>
              </div>
              <div className="--number fw-bold text-white">-150,000,000đ</div>
            </div>
          </div>
        </div>
        <div className="--right">
          <div className="info d-flex justify-content-between align-items-center">
            <div className="name-tab d-flex align-items-center">
              <img src="../img/combo shape.svg" alt="" />
              <h4 className="text-white --name fw-bold mb-0">
                Sun World Phu Quoc
              </h4>
            </div>
            <div className="--info d-flex align-items-center">
              <div className="notification">
                <img src="../img/noti.svg" alt="" />
                <span className="--number fs-14 text-white">3</span>
                <div className="tab-notifi ">
                  <div className="list-notifi ">
                    <div className="--item-notifi">
                      <div className="--icon">
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
                        <img src="../img/notification.svg" alt="" />
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
              <div className="avatar">
                <img src="../img/bg.png" alt="" />
              </div>
              <div className="language d-flex align-items-center">
                <img src="../img/vn.svg" alt="" />
                <img src="../img/en.png" alt="" />
                <select name="" id="">
                  <option value="">vn</option>
                  <option value="">en</option>
                </select>
              </div>
            </div>
          </div>
          <div className="--content">
            <div className="booking d-flex d-none">
              <div className="--item">
                <div className="name-tab d-flex align-items-center">
                  <div className="--icon">
                    <img src="../img/calendar 01.svg" alt="" />
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
                  <div className="--item-tab --link fw-bold active">
                    PARK TICKETS
                  </div>
                  <div className="--item-tab --link fw-bold">
                    SIGNATURE SHOW
                  </div>
                </div>
                <div className="tab-content">
                  <div className="--item-content">
                    <div className="search-filter d-flex">
                      <div className="search">
                        <img src="../img/search 02.svg" alt="" />
                        <input type="text" placeholder="Nhập từ khóa" />
                      </div>
                      <div className="filter">
                        <img src="../img/search 3.svg" alt="" />
                      </div>
                    </div>
                    <div className="list-ticket mt-3">
                      <div className="--item-ticket active">
                        <h6 className="fs-18 mb-0 me-2">
                          Hon Thom 2 Ways Ticket Adult 30D Hon Thom 2 Ways
                          Ticket Adult 30D
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
                      <img src="../img/bg.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="--item">
                <div className="name-tab d-flex align-items-center">
                  <div className="--icon">
                    <img src="../img/cart-minus.svg" alt="" />
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
                          <img src="../img/clear.svg" alt="" />
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
                          <img src="../img/clear.svg" alt="" />
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
                          <img src="../img/clear.svg" alt="" />
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
                          <img src="../img/clear.svg" alt="" />
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
                          <img src="../img/clear.svg" alt="" />
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
                        <img src="../img/clear1.svg" alt="" />
                        <span className="fs-18">Delete cart</span>
                      </button>
                      <button className="button_1">
                        <img src="../img/sent.svg" alt="" />
                        <span className="fs-18">Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment d-none">
              <div className="--back">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <div className="infopayment">
                    <div className="--info">
                      <h5>Infomation of tour guide</h5>
                      <div className="form_info d-flex flex-wrap justify-content-between">
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">
                            Tour Operator Name <span>*</span>
                          </label>
                          <input type="text" placeholder="Nguyễn văn A" />
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">Tour Guide Name</label>
                          <input type="text" />
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">Tour Guide Mobile</label>
                          <input type="text" />
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">Group Code</label>
                          <input type="text" />
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">Nationality</label>
                          <select name="" id="">
                            <option value="">Select option</option>
                          </select>
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="">Note</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="--paymentmethods">
                      <h5>Payment method</h5>
                      <div className="--payment">
                        <button className="--pay active">
                          <img src="../img/banking.svg" alt="" />
                          <span>Chuyển khoản</span>
                        </button>
                        <button className="--pay">
                          <img src="../img/banking1.svg" alt="" />
                          <span>Thanh toán Online</span>
                        </button>
                        <button className="--pay">
                          <img src="../img/money.svg" alt="" />
                          <span>Tiền mặt</span>
                        </button>
                      </div>
                    </div>
                    <div className="--tab-pay mt-3">
                      <div className="--item-tabpay">
                        <article>abcxyz</article>
                      </div>
                      <div className="--item-tabpay">
                        <ul className="--price">
                          <li>
                            <span>Balance:</span>
                            <span>-150,000,000VND</span>
                          </li>
                          <li>
                            <span>Total Available:</span>
                            <span>1,050,000,000VND</span>
                          </li>
                        </ul>
                      </div>
                      <div className="--item-tabpay">
                        <article>
                          Lưu ý:
                          <br />
                          Với hình thức thanh toán bằng tiền mặt, quý khách hàng
                          có 60 phút để tới quầy hoàn tất giao dịch.
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="pay-card">
                    <div className="--time mb-3 d-flex">
                      <div className="--icon">
                        <img src="../img/icon-clock.svg" alt="" />
                      </div>
                      <div className="--txt">
                        <p>Thời gian thanh toán còn lại</p>
                        <div className="--hour">
                          <div className="--number d-flex justify-content-between">
                            <div className="--item d-flex flex-column">
                              <span>00</span>
                              <span className="fs-12">Ngày</span>
                            </div>
                            <div className="--item d-flex flex-column">
                              <span>00</span>
                              <span className="fs-12">Giờ</span>
                            </div>
                            <div className="--item d-flex flex-column">
                              <span>00</span>
                              <span className="fs-12">Phút</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pay-order">
                      <h6 className="--title fw-bold fs-14">Order Detail</h6>
                      <div className="list-order">
                        <div className="--item-order">
                          <h6 className="--name mb-1 fs-14 d-flex flex-column">
                            <span>Hon Thom 2 Ways Ticket Adult 30D</span>
                            <span className="fs-12">09:30 AM - ZONE 2</span>
                          </h6>
                          <div className="--number d-flex justify-content-between">
                            <div className="parameter d-flex">
                              <div className="--value fs-14">800,000đ</div>
                              <div className="--amount fs-14">x12</div>
                            </div>
                            <div className="--money fs-14">1,600,000đ</div>
                          </div>
                        </div>
                        <div className="--item-order">
                          <h6 className="--name mb-1 fs-14 d-flex flex-column">
                            <span>Hon Thom 2 Ways Ticket Adult 30D</span>
                            <span className="fs-12">09:30 AM - ZONE 2</span>
                          </h6>
                          <div className="--number d-flex justify-content-between">
                            <div className="parameter d-flex">
                              <div className="--value fs-14">800,000đ</div>
                              <div className="--amount fs-14">x12</div>
                            </div>
                            <div className="--money fs-14">1,600,000đ</div>
                          </div>
                        </div>
                        <div className="--item-order">
                          <h6 className="--name mb-1 fs-14 d-flex flex-column">
                            <span>Hon Thom 2 Ways Ticket Adult 30D</span>
                            <span className="fs-12">09:30 AM - ZONE 2</span>
                          </h6>
                          <div className="--number d-flex justify-content-between">
                            <div className="parameter d-flex">
                              <div className="--value fs-14">800,000đ</div>
                              <div className="--amount fs-14">x12</div>
                            </div>
                            <div className="--money fs-14">1,600,000đ</div>
                          </div>
                        </div>
                      </div>
                      <div className="billplease fs-14">
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
                      <button className="button_1">
                        <img src="../img/sent.svg" alt="" />
                        <span className="fs-18">Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="confirmpay d-none">
              <div className="confirm">
                <div className="--icon">
                  <img src="../img/Flat Color.svg" alt="" />
                </div>
                <h4 className="fw-bold mt-1">Thanh toán thành công!</h4>
                <article>
                  Bạn đã đặt vé thành công, vui lòng kiểm tra thông tin đơn
                  hàng. Mail xác nhận sẽ được gửi về sau ít phút.
                </article>
                <div className="button d-flex">
                  <button>Về Booking</button>
                  <button className="button_1">Xem đơn hàng</button>
                </div>
              </div>
              <div className="confirm-oder">
                <div className="--top d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Order Detail</h5>
                  <div className="button d-flex">
                    <button>
                      <img src="../img/prin.svg" alt="" />
                      <span>Print Ticket</span>
                    </button>
                    <button>
                      <img src="../img/email.svg" alt="" />
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
                              <img src="../img/eye scanner.svg" alt="" />
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
                            <img src="../img/eye scanner.svg" alt="" />
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
                            <img src="../img/eye scanner.svg" alt="" />
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
                            <img src="../img/eye scanner.svg" alt="" />
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
            <div className="confirmpay fail d-none">
              <div className="confirm">
                <div className="--icon">
                  <img src="../img/payment-fail.svg" alt="" />
                </div>
                <h4 className="fw-bold mt-1">Thanh toán thành công!</h4>
                <article>
                  Bạn đã đặt vé thành công, vui lòng kiểm tra thông tin đơn
                  hàng. Mail xác nhận sẽ được gửi về sau ít phút.
                </article>
                <div className="button d-flex">
                  <button>Về Booking</button>
                  <button className="button_1">Xem đơn hàng</button>
                </div>
              </div>
            </div>
            <div className="historydetail d-none">
              <div className="--top mb-3 d-flex align-items-center justify-content-between">
                <div className="--name d-flex align-items-center">
                  <div className="--back me-3">
                    <i className="fa-solid fa-chevron-left"></i>
                  </div>
                  <h5 className="fw-bold mb-0">Order Detail</h5>
                </div>
                <div className="button d-flex">
                  <button>
                    <img src="../img/prin.svg" alt="" />
                    <span>Print Ticket</span>
                  </button>
                  <button>
                    <img src="../img/email.svg" alt="" />
                    <span>Send email</span>
                  </button>
                  <button>
                    <img src="../img/edit.svg" alt="" />
                    <span>edit</span>
                  </button>
                  <button>
                    <img src="../img/clear.svg" alt="" />
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
                          <img src="../img/eye scanner.svg" alt="" />
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
                          <img src="../img/eye scanner.svg" alt="" />
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
                          <img src="../img/eye scanner.svg" alt="" />
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
                        <img src="../img/sent.svg" alt="" />{' '}
                        <span>Payment</span>
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
            <div className="account d-none">
              <div className="row">
                <div className="col-md-3">
                  <div className="--infouser d-flex flex-column align-items-center text-center">
                    <div className="avatar">
                      <div className="--img">
                        <img src="../img/bg.png" alt="" />
                      </div>
                      <button>
                        <img src="../img/camera.svg" alt="" />
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
                        <img src="../img/edit.svg" alt="" />
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
            <div className="history">
              <div className="toolbar d-flex justify-content-between mb-3">
                <div className="filter d-flex align-items-center ">
                  <div className="search me-2">
                    <input type="text" />
                    <img src="../img/search 02.svg" alt="" />
                  </div>
                  <div className="day me-2">
                    <input type="text" />
                    <img src="../img/date.svg" alt="" />
                  </div>
                  <div className="open">
                    <select name="" id="">
                      <option value="">Open</option>
                    </select>
                  </div>
                </div>
                <button className="add-ticket">
                  <i className="fa-solid fa-plus"></i> <span>New tickets</span>
                </button>
              </div>
              <div className="table-ticket">
                <div className="--name d-flex justify-content-between">
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                  <p className="fs-18">PNR</p>
                </div>
                <div className="--item-ticket">
                  <div className="--name-ticket">#1363794</div>
                  <div className="--day-ticket">2022/07/28 05:00</div>
                  <div className="--flag-ticket">A___</div>
                  <div className="--status-ticket   ">
                    <p className="mb-0 --item active">Open</p>
                    <p className="mb-0 --item inactive">Pending</p>
                    <p className="mb-0 --item default">Done</p>
                  </div>
                  <div className="--pay-ticket">
                    <p className="mb-0 --item active">
                      <img src="../img/mobile payment.svg" alt="" />
                      <span>Online</span>
                    </p>
                    <p className="mb-0 --item inactive">
                      <img src="../img/card.svg" alt="" />
                      <span>Credit</span>
                    </p>
                    <p className="mb-0 --item default">
                      <img src="../img/money bag.svg" alt="" />
                      <span>Cash</span>
                    </p>
                  </div>
                  <div className="--qua-ticket">200</div>
                  <div className="--amount-ticket">4,800,000đ</div>
                  <div className="--option-ticket">
                    <button>
                      <img src="../img/eye scanner.svg" alt="" />
                    </button>
                    <button>
                      <img src="../img/refresh.svg" alt="" />
                    </button>
                    <button>
                      <img src="../img/clear.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="--bot d-flex justify-content-between">
                <div className="number-ticket d-flex align-items-center">
                  120 item
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link " href="#">
                        <i className="fa-solid fa-angles-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
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
                    <img src="../img/qr.png" alt="" />
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
                    <img src="../img/qr.png" alt="" />
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
                    <img src="../img/qr.png" alt="" />
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
                    <img src="../img/qr.png" alt="" />
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
                    <img src="../img/qr.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="button d-flex justify-content-between">
                <div className="bttn">
                  <button className="--btn">
                    <img src="../img/email.svg" alt="" />
                    <span>Send Email</span>
                  </button>
                  <button className="--btn">
                    <img src="../img/prin.svg" alt="" />
                    <span>Print Ticket</span>
                  </button>
                </div>
                <div className="arrow_modal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
