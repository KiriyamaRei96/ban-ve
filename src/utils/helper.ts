import { getCookie } from './cookies';
import { sunWorldToken } from './types/const';
import { useNavigate } from 'react-router-dom';

export const auth = () => !!getCookie(sunWorldToken);
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
