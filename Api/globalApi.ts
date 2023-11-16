import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';

export const globalSplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    reducerPath: 'GlobalAPI',
    tagTypes:['user'],
  endpoints: () => ({}),
})

