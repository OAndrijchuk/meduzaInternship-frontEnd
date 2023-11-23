import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/router';


export const PrivateRoute = ({ children }: {
   children: React.ReactNode
}) => {
  const isAuth = useAppSelector(state => state.user.isAuth);
  const router = useRouter()

  if (isAuth) {
    return children;
  }
  return router.push("/signIn") ;
}; 