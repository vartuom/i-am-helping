export type TRequest = {
    id: number;
    category: string;
    date: string;
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