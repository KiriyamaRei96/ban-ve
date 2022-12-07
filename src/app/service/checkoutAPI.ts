import { BaseXHR } from 'utils/axios';
export const getPaymentMethodsAPI = data =>
  BaseXHR.$get('/api/b2b/v1/payment/method-listing?' + data);
