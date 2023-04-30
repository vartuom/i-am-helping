export type TUser = {
    id: number;
    name: string;
    phone: string | null;
    about: string;
    image: string;
    balls: number;
    keys: number;
    finishedApplications: number;
    status: 'admin' | 'volunteer' | 'recipient';
}