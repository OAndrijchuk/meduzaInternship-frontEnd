import { RootState } from '@/redux/store';
import { useRefreshTokenQuery } from '@/redux/users/userAPI';
import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';




export const globalSplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: 'include',
    responseHandler:
      async (response) => {
        try {
        if (!response.ok) {
          if (response.status === 401) {
            console.log("тут потрібно зробити запит на рефреш токен");
          }

          const error = await response.json();
          throw new Error(error.message || 'Something went wrong');
        }

        return response.json();
      } catch (error) {
        console.log(error);
      }

        
      },
    prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
  
  }),
    reducerPath: 'GlobalAPI',
    tagTypes:['user'],
  endpoints: () => ({}),
})

