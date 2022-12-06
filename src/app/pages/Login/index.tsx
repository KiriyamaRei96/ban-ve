import { bg, logo1 } from 'asset/export';
import React, { useState } from 'react';
import LoginWrapper from './styled';
import { Form, message, Spin } from 'antd';
import { loginAPI } from 'app/service/accountAPI';
import { useGlobalFunctions } from 'utils/hooks/useGlobalFuncion';
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { onLogin } = useGlobalFunctions();
  return (
    <LoginWrapper>
      <div className="login">
        <div className="background-login">
          <img src={bg} alt="" />
        </div>
        <div className="card-login">
          <div className="logo d-flex justify-content-center">
            <img src={logo1} alt="" />
          </div>
          <div className="language my-4">
            <span className="--item active">Tiếng Việt</span>
            <span className="--item">English</span>
          </div>
          <Form
            onFinish={async value => {
              setLoading(true);
              try {
                const formData = new FormData();
                Object.entries(value).forEach(([key, value]) => {
                  if (typeof value === 'string') formData.append(key, value);
                });
                const data = await (await loginAPI(formData)).data;
                onLogin(data);
              } catch (err: any) {
                form.setFields([
                  {
                    name: 'password',
                    errors: [
                      err?.response?.data?.message || 'Đăng nhập thất bại',
                    ],
                  },
                ]);
              } finally {
                setLoading(false);
              }
            }}
            form={form}
          >
            <div className="form">
              <div className="form-group">
                <label className="fw-bold fs-14" htmlFor="">
                  User name
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
              <div className="form-group">
                <label className="fw-bold fs-14" htmlFor="">
                  Password
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
                    <input type="text" placeholder="" />
                  </Form.Item>

                  <img src="../img/eyes.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="button d-flex flex-column">
              <a className="--fogetpw" href="">
                Forgot password?
              </a>
              <button
                onClick={() => form.submit()}
                className="btn-login fw-bold"
              >
                {!loading ? 'Login' : <Spin />}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </LoginWrapper>
  );
}
