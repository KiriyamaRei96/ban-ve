import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PaymentMethods from './component/PaymentMethods';
import { Form } from 'antd';
import PayCard from './component/PayCard';
import { cartList } from '../Booking/slice/selector';
import { CREATE_ORDER, GET_PATMENT_METHODS, useCheckOutSlice } from './slice';
import { isOrder, payment } from './slice/selector';

// import FormData from 'form-data';
export interface CheckOutProps {}

export function CheckOut(props: CheckOutProps) {
  const navigate = useNavigate();
  const cart = useSelector(cartList);
  const selected = useSelector(payment);
  const redirect = useSelector(isOrder);
  const dispatch = useDispatch();
  const { actions } = useCheckOutSlice();
  useEffect(() => {
    if (cart.length === 0 || !cart) {
      navigate('/');
    }
    dispatch(GET_PATMENT_METHODS({ park: 143 }));
  }, [cart]);

  const [form] = Form.useForm();
  const senCheckOut = value => {
    dispatch(
      CREATE_ORDER({
        info: {
          ...value,
          payment: selected,
        },
        arr: cart,
      }),
    );
  };
  useEffect(() => {
    if (redirect) {
      navigate('/PaymentCallback?Thanh-toan');
    }
  }, [redirect]);
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
                    senCheckOut(value);
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
                          message: 'Kh??ng ???????c b??? tr???n tr?????ng n??y',
                        },
                      ]}
                      name="tourOperatorName"
                    >
                      <input type="text" placeholder="Nguy???n v??n A" />
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
