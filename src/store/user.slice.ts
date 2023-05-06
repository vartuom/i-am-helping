import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types";
import { user } from "../data/user";


interface IInitialState {
    isAuthPending: boolean,
    isLoggedIn: boolean,
    user: TUser
}

const initialState: IInitialState = {
    isAuthPending: false,
    isLoggedIn: true,
    user: user
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const {} =
    userSlice.actions;
export default userSlice.reducer;
