import { Form, Input, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { email, loading, message } from '../slice/selector';
import { GET_TOKEN, RESET_PASS } from '../slice';

export interface ResetPassFormProps {}

export function ResetPassForm(props: ResetPassFormProps) {
  const isloading = useSelector(loading);
  const errMessage = useSelector(message);
  const username = useSelector(email);

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(errMessage);
    form.setFields([
      { name: errMessage?.field, errors: [errMessage?.message] },
    ]);
  }, [errMessage]);
  return (
    <Form
      onFinish={value => {
        dispatch(RESET_PASS({ ...value, username }));
      }}
      form={form}
    >
      <div className="form">
        <div className="form-group">
          <label className="fw-bold fs-14" htmlFor="">
            Mã xác nhận
          </label>
          <div className="--input">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Không được bỏ trống trường này!',
                },
              ]}
              name={'token'}
            >
              <input type="text" placeholder="Mã xác nhận" />
            </Form.Item>
          </div>
          <label className="fw-bold fs-14" htmlFor="">
            Mật khẩu
          </label>
          <div className="--input">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Không được bỏ trống trường này!',
                },
              ]}
              name={'password'}
            >
              <input type="text" placeholder="Mật khẩu" />
            </Form.Item>
          </div>
          <label className="fw-bold fs-14" htmlFor="">
            Nhập lại mật khẩu
          </label>
          <div className="--input">
            <Form.Item
              name={'res-password'}
              dependencies={['password']}
              rules={[
                { required: true, message: 'Không được bỏ trống trường này!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'Mật khẩu mới và mật khẩu xác nhận phải giống nhau',
                      ),
                    );
                  },
                  message: 'Mật khẩu mới và mật khẩu xác nhận phải giống nhau',
                }),
              ]}
              hasFeedback
            >
              <input type="text" placeholder="Nhập lại mật khẩu" />
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="button d-flex flex-column">
        <button onClick={() => form.submit()} className="btn-login fw-bold">
          {!isloading ? 'Xác nhận' : <Spin />}
        </button>
      </div>
    </Form>
  );
}
