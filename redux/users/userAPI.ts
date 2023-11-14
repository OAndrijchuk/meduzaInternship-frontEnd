import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    tagTypes:['user'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (build) => ({
        signIn: build.mutation({
            query: (body) => ({
                url: 'auth/signIn',
                method: 'POST',
                body
            }),
        })
    })
});

export const {useSignInMutation } = userAPI;