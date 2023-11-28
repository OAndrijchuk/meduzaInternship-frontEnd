import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const auth0Api = createApi({
    reducerPath: 'auth0Api',
    tagTypes:['token'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.AUTH0_ISSUER_BASE_URL }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (body) => ({
        url: '/oauth/token',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    const { data } = await queryFulfilled
            },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = auth0Api;
export default auth0Api;