import { BaseXHR } from 'utils/axios';
export const getPaymentMethodsAPI = data =>
  BaseXHR.$get('/api/b2b/v1/payment/method-listing?' + data);
export const createOrderAPI = data =>
  BaseXHR.$post('/api/b2b/v1/checkout/create-order', data);
