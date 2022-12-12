import { bg, logo1 } from 'asset/export';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginWrapper from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { GetTokenForm } from './component/GetTokenForm';
import { forgetPassActions, useForgetPassSlice } from './slice';
import { pageState, redirect } from './slice/selector';
import { ResetPassForm } from './component/ResetPassForm';
export interface ForgetPassProps {}
export function ForgetPass(props: ForgetPassProps) {
  const { actions } = useForgetPassSlice();
  const state = useSelector(pageState);
  const isRedirect = useSelector(redirect);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isRedirect === true) {
      dispatch(forgetPassActions.resetState());
      navigate('/');
    }
  }, [isRedirect]);
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

          {state === 'getToken' && <GetTokenForm />}
          {state === 'changePass' && <ResetPassForm />}
        </div>
      </div>
    </LoginWrapper>
  );
}
