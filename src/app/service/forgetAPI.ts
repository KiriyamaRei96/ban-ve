import { BaseXHR } from 'utils/axios';
export const getToken = data => BaseXHR.$post('/api/b2b/auth/forget', data);
export const resetPassWord = data => BaseXHR.$post('/api/b2b/auth/reset', data);
