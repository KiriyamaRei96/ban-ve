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
  categories?: [I_Object] | [];
  image?: String | null;
  parks?: [parksType] | [];
}
export interface BookingState {
  eventList: [I_Object] | [];
  ticketList: [TicketsType] | [];
  loading: boolean;

  error: boolean;
}
