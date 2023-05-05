export type TUser = {
    id: number;
    name: string;
    phone: string | null;
    about: string;
    balls: number;
    keys: number;
    finishedApplications: number;
    status: 'admin' | 'volunteer' | 'recipient';
    confirmation?: 'green' | 'orange' | 'grey',
}