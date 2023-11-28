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
    }),
    overrideExisting: false,
});

export const {useSignInMutation, useSignUpMutation, useGetProfileQuery, useRefreshTokenQuery, useLogOutMutation } = userAPI;