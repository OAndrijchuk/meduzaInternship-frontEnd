import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';


export const globalSplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    responseHandler:
      async (response) => {
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Something went wrong');
        }
        console.log(response);
        
        return response.json();
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

