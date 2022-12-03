import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import QueryString from 'qs';
import { objectType } from 'types/customType';
import { store } from 'index';
import { getCookie } from './cookies';
import { sunWorldToken } from './types/const';
import { notify } from 'reapop';

export const KEY_NOTIFICATION = 'KEY';

const onSuccessInterceptorRequest = async (config: AxiosRequestConfig) => {
  const token = await getCookie(sunWorldToken);
  if (token && config && config.headers)
    config.headers.Authorization = `${token}`;
  config.paramsSerializer = {
    encode: params =>
      QueryString.stringify(params, {
        arrayFormat: 'brackets',
      }),
  };

  return config;
};
const onErrorInterceptorRequest = (error: AxiosError) => Promise.reject(error);

let notif;
const onErrorInterceptorResponse = (error: AxiosError<objectType>) => {
  if (error.response && error.response.status) {
    // error.response.data?.errors?.length &&
    //   store.dispatch(
    //     notify(error.response.data?.errors[0].msg, 'error', {
    //       title: 'Oops',
    //       dismissAfter: 5000,
    //     }),
    //   );
    store.dispatch(
      notify(
        error.response?.data?.message ? error.response?.data?.message : '',
        'error',
        {
          title: 'Oops',
          dismissAfter: 5000,
        },
      ),
    );
    // if (error.response.status === 401) {
    //   removeCookie(TYPE_COOKIE.TOKEN);
    //   store.dispatch(appActions.logout());
    // }
  }
  return Promise.reject(error);
};
const onSuccessInterceptorResponse = (response: AxiosResponse) => {
  if (
    response.status === 200 &&
    response.config.method !== 'get' &&
    !response.config.url?.includes('auth') &&
    !response.config.url?.includes('notification') &&
    !response.config.url?.includes('react') &&
    !response.config.url?.includes('checkout/create-cart')
  ) {
    if (!notif) {
      notif = store.dispatch(
        notify('Thành công.', 'success', {
          title: 'Success',
          dismissAfter: 2000,
        }),
      );

      setTimeout(() => {
        notif = null;
      }, 2000);
    }
  }
  return response;
};

axios.defaults.headers.post['Accept'] = 'application/json';
