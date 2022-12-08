import { BaseXHR } from 'utils/axios';
export const getEventsAPI = data =>
  BaseXHR.$get('/vi/api/b2b/v1/event/listing?' + data);
export const getTicketsAPI = data =>
  BaseXHR.$get('/vi/api/b2b/v1/ticket/listing?' + data);
