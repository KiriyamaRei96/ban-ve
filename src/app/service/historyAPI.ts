import { BaseXHR } from 'utils/axios';
export const historySearch = data =>
  BaseXHR.$get('/api/b2b/v1/order/listing' + data);
