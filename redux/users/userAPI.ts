import { globalSplitApi } from '@/Api/globalApi';

export const userAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation({
            query: (body) => ({
                url: 'auth/signIn',
                method: 'POST',
                body
            }),
        }),
        signUp: build.mutation({
            query: (body) => ({
                url: 'auth/signUp',
                method: 'POST',
                body
            }),
        }),
        getProfile: build.query({
            query: () => ({
                url: 'auth/me',
                method: 'GET',
            }),
            providesTags: ['user', 'removeInvite', 'addInvite', 'updateInvite'],
            
        }),
        refreshToken: build.query({
            query: () => ({
                url: 'auth/refresh',
                method: 'GET',
            }),
            
        }),
        logOut: build.mutation({
            query: () => ({
                url: 'auth/logOut',
                method: 'POST',
            }),
            
        }),
        getAllUsers: build.query({
            query: () => ({
                url: 'user',
                method: 'GET',
            }),
            
        }),
        getUserInfo: build.query({
            query: (id) => ({
                url: `user/${id}`,
                method: 'GET',
            }),
            
        }),
        removeAccount: build.mutation({
            query: () => ({
                url: `user`,
                method: 'DELETE',
            }),
            
        }),
        updateUserInfo: build.mutation({
            query: (body) => ({
                url: `user`,
                method: 'PUT',
                body:body,
            }),
            invalidatesTags:['user'],
        }),
    }),
    overrideExisting: false,
});

export const {useSignInMutation, useSignUpMutation, useGetProfileQuery, useRefreshTokenQuery, useLogOutMutation, useGetAllUsersQuery, useGetUserInfoQuery, useRemoveAccountMutation, useUpdateUserInfoMutation } = userAPI;