import {CreateEventPayload} from "../models/events";
import {api} from "./api";

export const eventsService = {
  createEvent: (values: CreateEventPayload) => api.post('events',  values),
  getEvents: () => api.get('events'),
  getEvent: (id: string) => api.get(`events/${id}`)
}