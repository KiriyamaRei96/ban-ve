import { BaseXHR } from 'utils/axios';
export const getPaymentMethodsAPI = data =>
  BaseXHR.$get('/vi/api/b2b/v1/payment/method-listing?' + data);
export const createOrderAPI = data =>
  BaseXHR.$post('/vi/api/b2b/v1/checkout/create-order', data);
