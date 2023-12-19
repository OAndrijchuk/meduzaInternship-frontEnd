import { RootState} from '@/redux/store';
import { createApi, fetchBaseQuery, BaseQueryFn } from '@reduxjs/toolkit/query/react';

// const dispatch = store.dispatch;

export const globalSplitApi:any = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: 'include',
    responseHandler:
     async (response) => {
        if (!response.ok) {
          // if (+response.status === 401) {
          //   const some = await dispatch(globalSplitApi?.endpoints?.refreshToken.initiate({}))
          //   console.log('some===>>>',some);
          //   return response.json();
          // }
          const error:any = response.json();
          throw new Error(error.message || 'Something went wrong');
        }
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
    tagTypes:['user', 'company'],
  endpoints: () => ({}),
})

