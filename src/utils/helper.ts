import { getCookie } from './cookies';
import { sunWorldToken } from './types/const';

export const auth = () => !!getCookie(sunWorldToken);
