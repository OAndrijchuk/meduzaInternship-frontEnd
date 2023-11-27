import { IUser } from '@/Types/IUser';
import { createSlice } from '@reduxjs/toolkit'

interface UsersState {
    user: IUser;
    token: string;
    isAuth: boolean;
};

const initialState: UsersState = {
    user: {
        userName: '',
        id: 0,
        email: '',
        isVerify: false
    },
    token: '',
    isAuth:false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }) => {
            state.user = payload;
        },
        setUserToken: (state, { payload }) => {
            state.token = payload;

        },
        setIsAuth: (state, { payload }) => {
            state.isAuth = payload;

        }
        
    }
});

export const userReducer = userSlice.reducer;
export const { setUserData, setUserToken, setIsAuth } = userSlice.actions;

