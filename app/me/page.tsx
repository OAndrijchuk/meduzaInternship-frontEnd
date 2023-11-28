'use client'
import { useAppSelector } from '@/hooks/redux';
import { getUserToken } from '@/redux/users/selectors';
import { useGetProfileQuery, useRefreshTokenQuery } from '@/redux/users/userAPI';
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setUserToken } from '@/redux/users/usersSlice';

export default function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useAppSelector(getUserToken)
  const { data: user, isError, isFetching, refetch } = useGetProfileQuery({});
  

  useEffect(() => {
    if (!isAuth) {
      router.push('/signIn');
    }
  }, [isAuth]);
  

  return (<>
    <h1>This is Profile page</h1>
    <button onClick={()=>dispatch(setUserToken(''))}>Remove token</button>
  </>
    
  )
}
