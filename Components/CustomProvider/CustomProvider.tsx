import { useAppSelector } from '@/hooks/redux'
import { getUserToken } from '@/redux/users/selectors';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect } from 'react'

const CustomProvider = ({children}: {
   children: React.ReactNode
}) => {
    const router = useRouter();
    const isAuth = useAppSelector(getUserToken);
    const isAuthRefresh: boolean = useAppSelector(state => state.user.isAuthRefresh) 
    
    useEffect(() => {
      if (!isAuth) {
          router.push('/signIn');
        }
    }, [isAuth, isAuthRefresh, router ]);

  return (
      <>
            {children}
      </>
  )
}

export default CustomProvider