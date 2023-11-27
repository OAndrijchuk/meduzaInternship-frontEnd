import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const auth0Api = createApi({
    reducerPath: 'auth0Api',
    tagTypes:['token'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-pv56md3tahktd2by.us.auth0.com' }),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (body) => ({
        url: '/oauth/token',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
                    console.log("Loading...");
                try {
                    const { data } = await queryFulfilled
                    // dispatch(setUserData(data))
                } catch (err) {
                    console.log(err);
                }
            },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = auth0Api;
export default auth0Api;