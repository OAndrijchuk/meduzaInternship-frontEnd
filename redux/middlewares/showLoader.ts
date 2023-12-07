import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { setIsLoading } from '../users/usersSlice';


const loading: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  if (action.type.includes('pending')) {
    store.dispatch(setIsLoading(true));
  }
  if (action.type.includes('fulfilled') || action.type.includes('rejected')) {
    store.dispatch(setIsLoading(false));
  }
  return next(action);
};

export default loading;