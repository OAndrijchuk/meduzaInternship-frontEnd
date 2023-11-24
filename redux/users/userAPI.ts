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
                    
                //    dispatch(setIsAuth(true));
                   dispatch(setUserData(data));
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
        getMe: build.mutation({
            query: () => ({
                url: 'auth/me',
                method: 'GET',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    console.log("Loading...");
               try {
                   const { data } = await queryFulfilled
                    
                //    dispatch(setIsAuth(true));
                //    dispatch(setUserData(data));
                   console.log(data);
                   
                } catch (err) {
                    console.log(err);
                }
            },
            
        }),
    }),
    overrideExisting: false,
});

export const {useSignInMutation, useSignUpMutation, useGetMeMutation } = userAPI;