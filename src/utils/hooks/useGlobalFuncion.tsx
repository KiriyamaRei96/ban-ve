import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { appActions } from 'app/pages/App/slice';
import { useDispatch, useSelector } from 'react-redux';
import { removeCookie, setCookie } from 'utils/cookies';
import { sunWorldToken } from 'utils/types/const';
export const useGlobalFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = data => {
    setCookie(sunWorldToken, data.token);
    dispatch(appActions.loginSuccesses());
    navigate('/');
  };

  return useMemo(() => ({ onLogin }), [onLogin]);
};
