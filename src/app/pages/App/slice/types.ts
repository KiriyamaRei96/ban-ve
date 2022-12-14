import { objectType } from 'types/customType';
import { I_Object } from 'utils/types/const';
export interface NoityType {
  id: number | string;
  title: string;
  content: string;
  category: string;
  seen: boolean;
  order: I_Object;
}
export interface AppState {
  loading: boolean;
  success: boolean;
  error: boolean;
  isLogged: boolean;
  userInfo?: objectType;
  currentPark?: number | string;
  parkArr?: any[];
  NoityArr?: [NoityType] | any[];
}
