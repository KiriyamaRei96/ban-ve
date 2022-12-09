import { BaseXHR } from 'utils/axios';
export const getHistoryDetailAPI = data =>
  BaseXHR.$get('/vi/api/b2b/v1/order/detail/' + data);
