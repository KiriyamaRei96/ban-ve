import { Form } from 'antd';
import LoginWrapper from 'app/pages/Login/styled';
import React from 'react';
import { BaseXHR } from 'utils/axios';

const ChangePass = ({ setModal }) => {
  const closeHandler = () => setModal(false);
  const finishHandler = async value => {
    try {
      const formData = new FormData();
      Object.entries(value).forEach((obj: any, id) =>
        formData.append(obj[0], obj[1]),
      );
      const { data } = await BaseXHR.$post(
        '/api/b2b/v1/account/change',
        formData,
      );
      closeHandler();
    } catch (err: any) {
      const { response } = err;
      if (response.data.field) {
        form.setFields([
          {
            name: response.data.field,
            errors: [response.data.message],
          },
        ]);
      }
    }
  };

  const [form] = Form.useForm();
  return (
    <LoginWrapper>
      <div className="login">
        <div className="card-login --white">
          <button onClick={closeHandler} className="cancel-btn">
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
          <h5 className="title">Change password</h5>
          <Form onFinish={finishHandler} form={form}>
            <div className="form">
              <div className="form-group">
                <label className="fw-bold fs-14" htmlFor="">
                  Mật khẩu hiện tại
                </label>
                <div className="--input">
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Không được bỏ trống trường này!',
                      },
                    ]}
                    name={'old_password'}
                  >
                    <input type="text" placeholder="Mật khẩu hiện tại" />
                  </Form.Item>
                </div>
                <label className="fw-bold fs-14" htmlFor="">
                  Mật khẩu mới
                </label>
                <div className="--input">
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: 'Không được bỏ trống trường này!',
                      },
                    ]}
                    name={'new_password'}
                  >
                    <input type="text" placeholder="Mật khẩu mới" />
                  </Form.Item>
                </div>
                <label className="fw-bold fs-14" htmlFor="">
                  Nhập lại mật khẩu
                </label>
                <div className="--input">
                  <Form.Item
                    name={'re-password'}
                    dependencies={['new_password']}
                    rules={[
                      {
                        required: true,
                        message: 'Không được bỏ trống trường này!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue('new_password') === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              'Mật khẩu mới và mật khẩu xác nhận phải giống nhau',
                            ),
                          );
                        },
                        message:
                          'Mật khẩu mới và mật khẩu xác nhận phải giống nhau',
                      }),
                    ]}
                    hasFeedback
                  >
                    <input type="text" placeholder="Nhập lại mật khẩu" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
          <div className="button justify-content-between d-flex ">
            <button onClick={closeHandler} className="btn-changePass fw-bold">
              Cancel
            </button>

            <button
              onClick={() => form.submit()}
              className="btn-changePass fw-bold submit"
            >
              Change password
            </button>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};
export default ChangePass;
