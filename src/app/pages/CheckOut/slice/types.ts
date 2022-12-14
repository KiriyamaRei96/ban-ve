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
export interface Seats {
  category: string;
  col: string;
  row: string;
  name: string;
  barCode: string;
  code: paymentImg;
}
export interface Agent extends I_Object {
  address: string | number | null;
  phone: string | number | null;
  park: any;
}
export interface ResponseType {
  id: number | undefined;
  ordernumber: string;
  totalPrice: number;
  flags: string | null;
  orderdate: {
    date: string;
    datetime: string;
  };
  orderState: string;
  payment: PaymentMethod;
  // seats: [Seats] | [];
  items: any[];
  tourOperatorName: string | number | null;
  tourGuideName: string | number | null;
  tourGuideMobile: string | number | null;
  tourGroupCode: string | number | null;
  tourNation: string | number | null;
  tourNotes: string | number | null;
  agent: Agent;
}
export interface CheckOutState {
  loading: boolean;
  error: boolean;
  paymentMethodList: [PaymentMethod] | any[];
  selectedMethod?: string | number;
  response?: ResponseType | undefined;
  isOrder?: boolean;
}
