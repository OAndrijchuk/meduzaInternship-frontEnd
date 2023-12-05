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
    .addMatcher(
         isAnyOf(
            globalSplitApi.endpoints.getProfile.matchPending,
            globalSplitApi.endpoints.refreshToken.matchPending,
            globalSplitApi.endpoints.logOut.matchPending,
            globalSplitApi.endpoints.signUp.matchPending,
            globalSplitApi.endpoints.signIn.matchPending,
            globalSplitApi.endpoints.getUserInfo.matchPending,
            globalSplitApi.endpoints.removeAccount.matchPending,
            globalSplitApi.endpoints.updateUserInfo.matchPending,
            globalSplitApi.endpoints.getAllUsers.matchPending,),
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
            globalSplitApi.endpoints.getAllUsers.matchFulfilled,
            globalSplitApi.endpoints.getUserInfo.matchFulfilled,
            globalSplitApi.endpoints.removeAccount.matchFulfilled,
            globalSplitApi.endpoints.updateUserInfo.matchFulfilled,
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
            globalSplitApi.endpoints.getAllUsers.matchRejected,
            globalSplitApi.endpoints.getUserInfo.matchRejected,
            globalSplitApi.endpoints.removeAccount.matchRejected,
            globalSplitApi.endpoints.updateUserInfo.matchRejected,
            globalSplitApi.endpoints.signIn.matchRejected,),
        (state, { payload }) => {
            state.isLoading = false
        }
    )
  }
});

export const userReducer = userSlice.reducer;
export const { setUserData, setUserToken, setIsAuth, setIsLoading } = userSlice.actions;

