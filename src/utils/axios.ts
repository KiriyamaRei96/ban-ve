import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  AxiosPromise,
} from 'axios';
import QueryString from 'qs';
import { objectType } from 'types/customType';
import { store } from 'index';
import { getCookie } from './cookies';
import { sunWorldToken } from './types/const';
import { notify } from 'reapop';

export const KEY_NOTIFICATION = 'KEY';

const onSuccessInterceptorRequest = async (config: AxiosRequestConfig) => {
  const token = await getCookie(sunWorldToken);
  console.log(config.headers);
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
axios.defaults.headers.post['Accept'] = 'application/json';

const _axios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
  timeout: 120 * 1000,
  // withCredentials: true, // Check cross-site Access-Control
});

_axios.interceptors.request.use(
  onSuccessInterceptorRequest,
  onErrorInterceptorRequest,
);

_axios.interceptors.response.use(
  onSuccessInterceptorResponse,
  onErrorInterceptorResponse,
);

/**
 *
 * @NOTE primary methods axios
 *
 */
class AxiosXHRConstructor {
  axiosInstance: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.$get = this.$get.bind(this);
    this.$post = this.$post.bind(this);
    this.$put = this.$put.bind(this);
    this.$delete = this.$delete.bind(this);
  }
  public $get(
    url: string,
    params?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.get(url, {
      ...{ params },
      ...config,
    });
  }
  public $post(
    url: string,
    data?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.post(url, data, config);
  }
  public $put(
    url: string,
    data?: objectType,
    config?: objectType,
  ): AxiosPromise {
    return this.axiosInstance.put(url, data, config);
  }
  public $delete(url: string, data?: objectType): AxiosPromise {
    // return this.axiosInstance.delete(url, {
    //   data,
    // });

    /**
     * @hotfix {https://github.com/axios/axios/issues/3220}
     */
    return this.axiosInstance.request({
      method: 'delete',
      url,
      data,
    });
  }
}

export const BaseXHR = new AxiosXHRConstructor(_axios);

export default _axios;
