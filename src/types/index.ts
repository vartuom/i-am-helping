export interface IApplication {
  ownerId: number;
  id: number;
  category: string;
  date: string;
  time: string;
  address: string;
  title: string;
  description: string;
  balls: number;
  executor: IVolunteer | null;
}

export interface IVolunteer {
  id: number;
  status: 'not-confirmed' | 'confirmed' | 'verified' | 'key-activated';
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  about: string;
  balls: number;
  keys: number;
  completedApplications: number
}