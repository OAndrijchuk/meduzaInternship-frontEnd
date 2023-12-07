import { globalSplitApi } from '@/Api/globalApi';
import { IUser } from '@/Types/IUser';
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

interface UsersState {
    user: IUser;
    token: string;
    isAuth: boolean;
    isLoading: boolean;
    allUsers: Array<IUser>;
};

const initialState: UsersState = {
    user: {
        userName: '',
        id: 0,
        email: '',
        isVerify: false,
        avatar:'',
    },
    allUsers:[],
    token: '',
    isAuth: false,
    isLoading:false,
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

        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;

        }
    },
    extraReducers: (builder) => {
        builder
    .addMatcher(
      globalSplitApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
      }
    )
    .addMatcher(
         isAnyOf(
            globalSplitApi.endpoints.refreshToken.matchRejected,
            globalSplitApi.endpoints.logOut.matchFulfilled,
            globalSplitApi.endpoints.removeAccount.matchFulfilled,),
        (state, { payload }) => {
            state.user = initialState.user
            state.token = ''
      }
    )
    .addMatcher(
       globalSplitApi.endpoints.refreshToken.matchFulfilled,
        (state, { payload }) => {
            state.token = payload.token
      }
    )
    .addMatcher(
       globalSplitApi.endpoints.getAllUsers.matchFulfilled,
        (state, { payload }) => {
            state.allUsers = payload
      }
    )
  }
});

export const userReducer = userSlice.reducer;
export const { setUserData, setUserToken, setIsAuth, setIsLoading } = userSlice.actions;

