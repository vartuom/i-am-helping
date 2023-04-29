import { createSlice } from "@reduxjs/toolkit";
import {IUser} from "../types";


interface IInitialState {
    isAuthPending: boolean,
    isLoggedIn: boolean,
    user: IUser
}

const initialState: IInitialState = {
    isAuthPending: false,
    isLoggedIn: true,
    user: {
        id: "11111114",
        name: "Петров Петр Петрович",
        phone: "+7(000) 000-00-00",
        about: "Я люблю музыку, книги и кошек",
        keys: 1,
        role: "Администратор",
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const {} =
    userSlice.actions;
export default userSlice.reducer;
