import { useAppSelector } from '@/hooks/redux'
import { getUserToken } from '@/redux/users/selectors';
import { useLazyRefreshTokenQuery } from '@/redux/users/userAPI';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect } from 'react'


const CustomContext = createContext(null);

const CustomProvider = ({children}: {
   children: React.ReactNode
}) => {
    // const router = useRouter();
    // const isAuth = useAppSelector(getUserToken);
    // const [refreshToken, {refresh}]=useLazyRefreshTokenQuery({})
    // const isAuthRefresh: boolean = useAppSelector(state => state.user.isAuthRefresh) 
    // useEffect(() => { 
    //     if (isAuthRefresh) {
    //         refreshToken()
    //             .then(() =>console.log('isAuthRefresh'))
    //             .catch(() => router.push('/signIn'))
    //         // console.log('isAuthRefresh===>>>', isAuthRefresh);
    //     }
        
    // }, [isAuthRefresh, refreshToken, router, refresh])
    
    // useEffect(() => {
    //     if (!isAuth&&!isAuthRefresh) {
    //         router.push('/signIn');
    //     }
    // }, [isAuth, router, isAuthRefresh ]);


  return (
      <>
        <CustomContext.Provider value={null}>
            {children}
        </CustomContext.Provider>
      </>
  )
}

export default CustomProvider