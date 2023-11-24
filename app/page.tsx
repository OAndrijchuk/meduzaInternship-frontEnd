"use client"
import * as dotenv from 'dotenv';
import { HeroTitle } from '@/Components/HeroTitle/HeroTitle';
import { MainStyled } from './HomePage.styled';
import TheModal from '@/Components/Modal/TheModal';
import React, { useState } from 'react'
import Link from 'next/link';
import TestName from '@/Components/TestName/TestName';
import { Button, ButtonBase } from '@mui/material';
import {useAuth0} from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setUserToken } from '@/redux/users/usersSlice';
import { getCsrfToken } from 'next-auth/react';
import { useGetMeMutation } from '@/redux/users/userAPI';



type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  // const token = useAppSelector(state => state.user.token)
  const [getMyProfiel, { data }] = useGetMeMutation();
  // const getToken = async () => {
  //   const token = await getCsrfToken()
   
  //   console.log(token);

  // }
  // const dispatch = useAppDispatch();
  //     const {
  //       isLoading,
  //       isAuthenticated,
  //       error,
  //       user,
  //       loginWithRedirect,
  //       logout,
  //       getAccessTokenSilently
  // } = useAuth0();
  
  // const getToken = async () => {
  //      if (isAuthenticated) {
  //         const token = await getAccessTokenSilently()
  //         dispatch(setUserToken(token))
  //         console.log(token); 
  //       }
  // }
  // React.useEffect(() => {
  //   getToken()
  // }, [isAuthenticated]);
  
  
const showModal = searchParams?.modal;
  return (
    <MainStyled >
      <HeroTitle />
      <ButtonBase onClick={getMyProfiel}>Get me</ButtonBase>
      <Link href="/?modal=true">Subscribe</Link>
      {showModal && <TheModal>
        <TestName/>
      </TheModal>}
    </MainStyled>
  )
}

