import { objectType } from 'types/customType';
import { I_Object } from 'utils/types/const';
export interface paymentImg {
  original: string;
}
export interface PaymentMethod extends I_Object {
  code: string;
  description: string | null;
  image: paymentImg;
}
export interface CheckOutState {
  loading: boolean;
  error: boolean;
  paymentMethodList: [PaymentMethod] | any[];
  selectedMethod?: string | number;
}
