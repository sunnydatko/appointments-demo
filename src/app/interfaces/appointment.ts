export interface Appointment {
  appointmentType: string;
  appointmentId: string;
  createDateTime: string;
  requestedDateTimeOffset: string;
  animal: Animal;
  user: User;
}

export interface Animal {
  animalId: string;
  firstName: string;
  breed: string;
  species: string;
}

export interface User {
  firstName: string;
  lastName: string;
  userId: string;
}
