
export type TRequest = {
  id: number;
  date: Date;
  time: string;
  address: string;
  title: string;
  content: string;
  bulls: number;
  person_img: string | null;
  person_name: string | null;
  phone: string | null;
  is_approvable: boolean;
}

