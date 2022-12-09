import { objectType } from 'types/customType';
import { I_Object } from 'utils/types/const';
export interface EventType {
  id: number | string;
  name: string | null;
}
export interface parksType extends I_Object {
  address: string | number | null;
  phone: string | number | null;
  email: string | number | null;
}
export interface TicketsType extends I_Object {
  price: number | null;
  categories?: [I_Object] | [];
  image?: String | null;
  parks?: [parksType] | [];
}
export interface CartItemType extends I_Object {
  amount: number;
  date: string | undefined;
  price: number | null;
  performance: string | number | null | undefined;
}
export interface ParentCategoryDataType {
  name: string | number | null;
  value: string | number | null;
  count: string | number | null;
}
export interface PerformancesJsonType extends I_Object {
  quantityFree: number;
  quantityMax: number;
  dateFrom: {
    date: string;
    datetime: string;
  };
  dateTo: {
    date: string;
    datetime: string;
  };
}
export interface PerformancesDataType {
  value: string | number | null;
  count: string | number | null;
  json: PerformancesJsonType;
}
export interface FitlterItemsType {
  label: string | number | null;
  type: string | number | null;
  fieldname: string | number | null;
  currentValue: string | number | null;
  currentCategory: string | number | null;
}
export interface ParentCategoryType extends FitlterItemsType {
  data: [ParentCategoryDataType] | any[];
}
export interface PerformancesType extends FitlterItemsType {
  data: [PerformancesDataType] | any[];
}

export interface BookingState {
  eventList: [I_Object] | [];
  ticketList: [TicketsType] | [];
  cart: [CartItemType] | any[];
  loading: boolean;
  error: boolean;
  startDate?: string;
  filter?: {
    parentCategoryIds?: ParentCategoryType;
    performances?: PerformancesType;
  };
  search?: {
    event?: number | string;
    date?: string;
    parentCategoryIds?: number | string;
    performances?: number | string;
  };
}
