"use client"
import { HeroTitle } from '@/Components/HeroTitle/HeroTitle';
import { MainStyled } from './HomePage.styled';
import TheModal from '@/Components/Modal/TheModal';
import React from 'react'
import Link from 'next/link';
import TestName from '@/Components/TestName/TestName';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setUserToken } from '@/redux/users/usersSlice';
import { useRefreshTokenQuery } from '@/redux/users/userAPI';



type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const dispatch = useAppDispatch();
    const { data: newToken }= useRefreshTokenQuery({});
  
  const refresh = async () => {
    console.log(newToken);
    
  }
  
const showModal = searchParams?.modal;
  return (
    <MainStyled >
      <HeroTitle />
       <button onClick={()=>dispatch(setUserToken(''))}>Remove token</button>
      <button onClick={refresh}>Show token</button>
      <Link href="/?modal=true">Subscribe</Link>
      {showModal && <TheModal>
        <TestName/>
      </TheModal>}
    </MainStyled>
  )
}

