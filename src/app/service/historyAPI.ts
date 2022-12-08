import { BaseXHR } from 'utils/axios';
export const historySearch = data =>
  BaseXHR.$get('/vi/api/b2b/v1/order/listing?' + data);
