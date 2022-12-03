import { objectType } from 'types/customType';

export interface AppState {
  loading: boolean;
  success: boolean;
  error: boolean;
  isLogged: boolean;
  userInfo?: objectType;
}
