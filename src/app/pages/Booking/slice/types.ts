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
}
export interface BookingState {
  eventList: [I_Object] | [];
  ticketList: [TicketsType] | [];
  cart: [CartItemType] | any[];
  loading: boolean;
  error: boolean;
  startDate?: string;
}
