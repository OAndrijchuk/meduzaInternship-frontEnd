import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { setIsAuthRefresh } from '../users/usersSlice';
import { globalSplitApi } from '@/Api/globalApi';


const refreshAuth: Middleware =  (store: MiddlewareAPI) => (next: Dispatch) => async (action: any) => {
    
    if (action?.payload?.originalStatus === 401) {
       try {
      const some = await store.dispatch(globalSplitApi.endpoints.refreshToken.initiate({}));
      // const rez = await store.dispatch(globalSplitApi.endpoints[action.meta.arg.endpointName].initiate({}));
    console.log('some===>>>', some);
    console.log('action===>>>', action);

    //   return refreshAuth(store)(next)(action);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
    }

  return next(action);
};

export default refreshAuth;