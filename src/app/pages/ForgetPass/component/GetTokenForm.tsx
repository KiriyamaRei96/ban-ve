import { Form, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loading, message } from '../slice/selector';
import { GET_TOKEN } from '../slice';

export interface GetTokenFormProps {}

export function GetTokenForm(props: GetTokenFormProps) {
  const isloading = useSelector(loading);
  const errMessage = useSelector(message);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFields([{ name: 'username', errors: [errMessage?.message] }]);
  }, [errMessage]);
  return (
    <Form
      onFinish={value => {
        dispatch(GET_TOKEN(value));
      }}
      form={form}
    >
      <div className="form">
        <div className="form-group">
          <label className="fw-bold fs-14" htmlFor="">
            Email
          </label>
          <div className="--input">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Không được bỏ trống trường này!',
                },
              ]}
              name={'username'}
            >
              <input type="text" placeholder="Họ và tên" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="button d-flex flex-column">
        <button onClick={() => form.submit()} className="btn-login fw-bold">
          {!isloading ? 'Nhận mã xác nhận' : <Spin />}
        </button>
      </div>
    </Form>
  );
}
