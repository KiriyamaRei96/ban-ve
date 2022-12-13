import { BaseXHR } from 'utils/axios';
export const loginAPI = data => BaseXHR.$post('/api/b2b/auth/login', data);
export const logOutAPI = () => BaseXHR.$post('/api/b2b/v1/account/logout');

export const getUserInfoAPI = data =>
  BaseXHR.$get('/api/b2b/v1/account/get?' + data);
