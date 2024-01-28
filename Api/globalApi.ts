import { RootState} from '@/redux/store';
import { setIsAuthRefresh, setUserToken } from '@/redux/users/usersSlice';
import { createApi, fetchBaseQuery, BaseQueryFn, FetchBaseQueryError, FetchArgs } from '@reduxjs/toolkit/query/react';



 const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    credentials: 'include',
    responseHandler:
     async (response) => {
        if (!response.ok) {
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
 })
  
 const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
   > = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions)
    
    if (result.error && result.error.originalStatus === 401) {
      api.dispatch(setIsAuthRefresh(false))
      const refreshResult = await baseQuery('auth/refresh', api, extraOptions)
      if (refreshResult.data) {
        api.dispatch(setUserToken(refreshResult.data.token))
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(setUserToken(''))
        api.dispatch(setIsAuthRefresh(true))
      }
    }
  return result
  } catch (error) {
    console.error('Error in baseQueryWithReauth:', error);
    throw error;
  }
}

export const globalSplitApi = createApi({
  baseQuery:baseQueryWithReauth,
  reducerPath: 'GlobalAPI',
  tagTypes:['user', 'company', 'companyInfo', 'addInvite', 'removeInvite', 'updateInvite', 'removeMember'],
  endpoints: () => ({}),
})

