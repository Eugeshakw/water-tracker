import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogIn: false,
    isloading: false,
    error: false,
    isRefreshing: false,
    alert: false,
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:{}
})