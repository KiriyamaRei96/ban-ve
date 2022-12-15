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
}

export interface ResponseType {
  id: number | undefined;
  ordernumber: string;
  totalPrice: number;
  items: any[];
  orderdate: {
    date: string;
    datetime: string;
  };
  orderState: { name: string; value: string };
  payment: PaymentMethod;
  seats: [Seats] | [];
  tourOperatorName: string | number | null;
  tourGuideName: string | number | null;
  tourGuideMobile: string | number | null;
  tourGroupCode: string | number | null;
  tourNation: string | number | null;
  tourNotes: string | number | null;
  agent: Agent;
}

export interface HistoryDetailState {
  loading: boolean;
  error: boolean;
  response?: ResponseType;
}
