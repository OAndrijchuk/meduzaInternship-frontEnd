import { globalSplitApi } from '@/Api/globalApi';
import { setUserData } from './usersSlice';

export const userAPI = globalSplitApi.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation({
            query: (body) => ({
                url: 'auth/signIn',
                method: 'POST',
                body
            }),
           async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    console.log("Loading...");
                try {
                    const { data } = await queryFulfilled
                    dispatch(setUserData(data))
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        signUp: build.mutation({
            query: (body) => ({
                url: 'auth/signUp',
                method: 'POST',
                body
            }),
            transformResponse: response => {
                console.log('transform', response);
                return response;
            },
        }),
        getToken: build.mutation({
            query: (body) => ({
                url: 'auth/signUp',
                method: 'POST',
                body
            }),
            
            transformResponse: response => {
                console.log('transform', response);
                return response;
            },
        }),
    }),
    overrideExisting: false,
});

export const {useSignInMutation, useSignUpMutation } = userAPI;