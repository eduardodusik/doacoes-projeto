export interface CreateEventPayload {
  name: string
  description: string
  address: string
  city: string
  responsibleName: string
  phoneNumber: string
}

export interface EventResponse extends CreateEventPayload {
  id: string
  createdAt: string
}