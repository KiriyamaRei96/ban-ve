import React from 'react';
import { cartMinus, clear, clear1, sent } from 'asset/export';
export interface CartProps {}

const Cart = (props: CartProps) => {
  return (
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
  );
};
export default Cart;
