import { bg, logo1 } from 'asset/export';
import * as React from 'react';
import LoginWrapper from './styled';

export interface LoginProps {}

export function Login(props: LoginProps) {
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
          <div className="form">
            <div className="form-group">
              <label className="fw-bold fs-14" htmlFor="">
                User name
              </label>
              <div className="--input">
                <input type="text" placeholder="Họ và tên" />
              </div>
            </div>
            <div className="form-group">
              <label className="fw-bold fs-14" htmlFor="">
                Password
              </label>
              <div className="--input">
                <input type="text" placeholder="" />
                <img src="../img/eyes.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="button d-flex flex-column">
            <a className="--fogetpw" href="">
              Forgot password?
            </a>
            <button className="btn-login fw-bold">Login</button>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}
