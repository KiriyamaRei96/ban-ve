import React, { useEffect } from 'react';
import { email, eyeScanner, prin, qr } from 'asset/export';
import { ResponseType } from 'app/pages/CheckOut/slice/types';
import { response } from 'app/pages/CheckOut/slice/selector';
import { numberWithCommas } from 'utils/helper';
import { Form } from 'antd';

const OrderDetail = ({ res }) => {
  const data: ResponseType = res;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFields(
      Object.entries(res).map((value, index) => {
        return { name: value[0], value: value[1] };
      }),
    );
  }, [res]);
  return (
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
                  <span>#{data.ordernumber}</span>
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
                  <span>{data.payment.code}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Owner</span>
                  <span>{data.agent.name}</span>
                </li>
                <li>
                  <span>Date/Time</span>
                  <span>{data.orderdate.datetime}</span>
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
                  <span className="--money">
                    {numberWithCommas(data.totalPrice)}đ
                  </span>
                </div>
                <div className="--item-bill d-flex justify-content-between align-items-center">
                  <span>Amount paid</span>
                  <span className="--money">0đ</span>
                </div>
                <div className="--item-bill d-flex justify-content-between align-items-center">
                  <span>Amount Remaining</span>
                  <span className="--money">
                    {numberWithCommas(data.totalPrice)}đ
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form">
              <Form form={form}>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Operator Name{' '}
                  </label>
                  <Form.Item name="tourOperatorName">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Name
                  </label>
                  <Form.Item name="tourGuideName">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Tour Guide Mobile
                  </label>
                  <Form.Item name="tourGuideMobile">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Group code
                  </label>
                  <Form.Item name="tourGroupCode">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Nationality
                  </label>
                  <Form.Item name="tourNation">
                    <input type="text" />
                  </Form.Item>
                </div>
                <div className="form-group d-flex flex-column">
                  <label className="fs-14" htmlFor="">
                    Note
                  </label>
                  <Form.Item name="tourNotes">
                    <input type="text" />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
