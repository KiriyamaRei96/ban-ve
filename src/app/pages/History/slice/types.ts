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
  orderdate: {
    date: string;
    datetime: string;
  };
  orderState: string;
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
export interface StateOption {
  active: boolean;
  name: string;
  value: string;
}
export interface Pagination {
  current: number;
  totalCount: number;
  numItemsPerPage: number;
}
export interface SearchOptions {
  page?: number;
  fromTime?: string;
  toTime?: string;
  orderState?: string;
}
export interface HistoryState {
  loading: boolean;
  error: boolean;
  orderStateOption?: [StateOption] | any[];
  pagination?: Pagination;
  search?: SearchOptions;
}
