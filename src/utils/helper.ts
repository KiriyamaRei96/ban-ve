import { getCookie } from './cookies';
import { sunWorldToken } from './types/const';
import { useNavigate } from 'react-router-dom';

export const auth = () => !!getCookie(sunWorldToken);
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const paymentStateMap = {
  SyncVGS: '#C9C9C9',
  failed: '#EA2127',
  success: '#1AA57B',
  aborted: '#C9C9C9',
  paymentPending: '#F9B217',
  cancelled: '#C9C9C9',
  committed: '#1AA57B',
};
