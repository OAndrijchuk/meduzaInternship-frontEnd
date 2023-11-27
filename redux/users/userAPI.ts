import { globalSplitApi } from '@/Api/globalApi';
import { setUserData, setUserToken } from './usersSlice';



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
                   dispatch(setUserData(data));
                    const cookies = data.headers.get('refreshToken');
                    console.log(cookies);

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
        getProfile: build.query({
            query: () => ({
                url: 'auth/me',
                method: 'GET',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    console.log("Loading...");
               try {
                   const { data } = await queryFulfilled

                   console.log(data);
                   
                } catch (err) {
                    console.log(err);
                }
            },
            
        }),
        refreshToken: build.query({
            query: () => ({
                url: 'auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    console.log("Loading...");
               try {
                    const { data } = await queryFulfilled
                    dispatch(setUserToken(data.token));
               } catch (err) {
                    dispatch(setUserToken(''));
                    console.log(err);
                }
            },
            
        }),
    }),
    overrideExisting: false,
});

export const {useSignInMutation, useSignUpMutation, useGetProfileQuery, useRefreshTokenQuery } = userAPI;