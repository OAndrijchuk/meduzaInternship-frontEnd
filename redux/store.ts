'use client'
import { configureStore } from "@reduxjs/toolkit";
import {usersReducer} from './users/usersSlice'
import { type } from "os";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
})
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;