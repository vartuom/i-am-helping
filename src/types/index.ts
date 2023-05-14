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

export interface IFirstStep {
  taskTime: string;
  taskDate: string;
  isNoTimeLimit: boolean;
  isProcessed: boolean;
}

export interface ISecondStep {
  taskType: string;
  taskDetails: string;
  isProcessed: boolean;
}

export interface IThirdStep {
  taskMeetingPoint: string;
  isProcessed: boolean;
}


export type TUser = {
  id: number;
  name: string;
  phone: string | null;
  avatar: string
  about?: string;
  balls?: number;
  keys?: number;
  finishedApplications?: number;
  status: 'admin' | 'volunteer' | 'recipient';
  confirmation?: 'green' | 'orange' | 'grey',
}

export type TRequest = {
  id: number;
  category: string;
  date: string;
  time: string;
  address: string;
  title: string;
  content: string;
  bulls: number;
  user: TUser;
  isEdited?: string;
  isActive?: boolean;
  onChatClicked?: ((id: number) => void);
  onCallClicked?: ((id: number) => void);
  onBallClicked?: ((id: number) => void);
  onDeleteClicked?: ((id: number) => void);
  onApproveClicked?: ((id: number) => void);
}

export type TAdmin = {
  id: number;
  name: string;
  phone: string | null;
  permissions: string[]
}