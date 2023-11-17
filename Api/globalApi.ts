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
      }
  
  }),
    reducerPath: 'GlobalAPI',
    tagTypes:['user'],
  endpoints: () => ({}),
})

