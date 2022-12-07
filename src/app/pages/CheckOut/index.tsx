import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PaymentMethods from './component/PaymentMethods';
import { Form } from 'antd';
import PayCard from './component/PayCard';
import { cartList } from '../Booking/slice/selector';
import { GET_PATMENT_METHODS, useCheckOutSlice } from './slice';

export interface CheckOutProps {}

export function CheckOut(props: CheckOutProps) {
  const navigate = useNavigate();
  const cart = useSelector(cartList);
  const dispatch = useDispatch();
  const { actions } = useCheckOutSlice();
  useEffect(() => {
    if (cart.length === 0 || !cart) {
      navigate('/');
    }
    dispatch(GET_PATMENT_METHODS({ park: 143 }));
  }, [cart]);

  const [form] = Form.useForm();
  return (
    <div className="--content">
      <div className="payment ">
        <div className="--back">
          <i
            onClick={() => navigate(-1)}
            className="fa-solid fa-chevron-left"
          ></i>
        </div>
        <div className="row">
          <div className="col-md-9">
            <div className="infopayment">
              <div className="--info">
                <h5>Infomation of tour guide</h5>
                <Form
                  form={form}
                  onFinish={value => {
                    console.log(value);
                  }}
                  className="form_info d-flex flex-wrap justify-content-between"
                >
                  <div className="form-group d-flex flex-column">
                    <label>
                      Tour Operator Name <span>*</span>
                    </label>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'Không được bỏ trốn trường này',
                        },
                      ]}
                      name="tourOperatorName"
                    >
                      <input type="text" placeholder="Nguyễn văn A" />
                    </Form.Item>
                  </div>

                  <div className="form-group d-flex flex-column">
                    <label htmlFor="tourGuideName">Tour Guide Name</label>
                    <Form.Item name="tourGuideName">
                      <input name="tourGuideName" type="text" />
                    </Form.Item>
                  </div>
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="">Tour Guide Mobile</label>
                    <Form.Item name="tourGuideMobile">
                      <input type="text" />
                    </Form.Item>
                  </div>
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="">Group Code</label>
                    <Form.Item name="tourGroupCode">
                      <input type="text" />
                    </Form.Item>
                  </div>
                  <div className="form-group d-flex flex-column">
                    <label htmlFor="">Nationality</label>
                    <Form.Item name="tourNation">
                      <select id="">
                        <option value="">Select option</option>
                        <option value="1">Select option2</option>
                      </select>
                    </Form.Item>
                  </div>
                  <div className="form-group d-flex flex-column">
                    <label>Note</label>
                    <Form.Item name="tourNotes">
                      <input type="text" />
                    </Form.Item>
                  </div>
                </Form>
              </div>
              <PaymentMethods />
            </div>
          </div>
          <PayCard form={form} />
        </div>
      </div>
    </div>
  );
}
