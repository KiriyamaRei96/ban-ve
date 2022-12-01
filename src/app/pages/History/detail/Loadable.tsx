import { lazyLoad } from 'utils/loadable';

export const Historydetail = lazyLoad(
  () => import('./index'),
  module => module.Historydetail,
);
