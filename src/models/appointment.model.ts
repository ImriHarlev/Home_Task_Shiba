export interface Appointment {
  id: string;
  value: string;
  subKinds: AppointmentSubKind[];
}

export interface AppointmentSubKind {
  id: string;
  value: string;
}

export interface AppointmentSearchData {
  userId: string,
  appointmentKindId: string,
  appointmentSubKindId: string,
  startDate: Date,
  endDate: Date,
}