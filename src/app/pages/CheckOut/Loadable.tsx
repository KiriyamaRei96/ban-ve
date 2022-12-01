import { lazyLoad } from 'utils/loadable';

export const CheckOut = lazyLoad(
  () => import('./index'),
  module => module.CheckOut,
);
