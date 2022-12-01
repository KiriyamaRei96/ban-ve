import { lazyLoad } from 'utils/loadable';

export const PaymentCallback = lazyLoad(
  () => import('./index'),
  module => module.PaymentCallback,
);
