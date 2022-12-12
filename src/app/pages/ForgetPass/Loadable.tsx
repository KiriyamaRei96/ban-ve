import { lazyLoad } from 'utils/loadable';

export const ForgetPass = lazyLoad(
  () => import('./index'),
  module => module.ForgetPass,
);
