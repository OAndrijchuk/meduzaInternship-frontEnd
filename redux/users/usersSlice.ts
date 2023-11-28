import { globalSplitApi } from '@/Api/globalApi';
import { IUser } from '@/Types/IUser';
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

interface UsersState {
    user: IUser;
    token: string;
    isAuth: boolean;
    isLoading: boolean;
};

const initialState: UsersState = {
    user: {
        userName: '',
        id: 0,
        email: '',
        isVerify: false
    },
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
            globalSplitApi.endpoints.logOut.matchFulfilled,),
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
         isAnyOf(
            globalSplitApi.endpoints.getProfile.matchPending,
            globalSplitApi.endpoints.refreshToken.matchPending,
            globalSplitApi.endpoints.logOut.matchPending,
            globalSplitApi.endpoints.signUp.matchPending,
            globalSplitApi.endpoints.signIn.matchPending),
        (state, { payload }) => {
            state.isLoading = true
      }
    )
    .addMatcher(
        isAnyOf(
            globalSplitApi.endpoints.getProfile.matchFulfilled,
            globalSplitApi.endpoints.refreshToken.matchFulfilled,
            globalSplitApi.endpoints.logOut.matchFulfilled,
            globalSplitApi.endpoints.signUp.matchFulfilled,
            globalSplitApi.endpoints.signIn.matchFulfilled,),
        (state, { payload }) => {
            state.isLoading = false
        }
    )
    .addMatcher(
        isAnyOf(
            globalSplitApi.endpoints.getProfile.matchRejected,
            globalSplitApi.endpoints.refreshToken.matchRejected,
            globalSplitApi.endpoints.logOut.matchRejected,
            globalSplitApi.endpoints.signUp.matchRejected,
            globalSplitApi.endpoints.signIn.matchRejected,),
        (state, { payload }) => {
            state.isLoading = false
        }
    )
  }
});

export const userReducer = userSlice.reducer;
export const { setUserData, setUserToken, setIsAuth, setIsLoading } = userSlice.actions;

