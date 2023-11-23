
import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'next/router';

export const PublicRoute = ({ children }: {
   children: React.ReactNode
}) => {
  const isAuth = useAppSelector(state => state.user.isAuth);
   const router = useRouter()

  return isAuth ? router.push('/') : children;
};