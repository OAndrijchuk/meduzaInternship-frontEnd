import { IUser } from '@/Types/IUser';
import { createSlice } from '@reduxjs/toolkit'

interface UsersState {
    user: IUser;
    token: string;
};

const initialState: UsersState = {
    user: {
        userName: '',
        id: 0,
        email: '',
        isVerify: false
    },
    token:''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
        }
        
    }
});

export const userReducer = userSlice.reducer;
export const { setUserData } = userSlice.actions;

