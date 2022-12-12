import { objectType } from 'types/customType';
import { I_Object } from 'utils/types/const';

export interface forgetPassState {
  loading: boolean;
  error: boolean;
  pageState: 'getToken' | 'changePass';
  message?: objectType | undefined;
  username?: string;
  needNavigate?: boolean;
}
