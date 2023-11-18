"use client"
import * as dotenv from 'dotenv';
import { HeroTitle } from '@/Components/HeroTitle/HeroTitle';
import { MainStyled } from './HomePage.styled';
import TheModal from '@/Components/Modal/TheModal';
import React from 'react'
import Link from 'next/link';
import TestName from '@/Components/TestName/TestName';
import { useUser } from '@auth0/nextjs-auth0/client';


type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const { user, error, isLoading } = useUser();
  console.log(user);
  
const showModal = searchParams?.modal;
  return (
    <MainStyled >
      <HeroTitle />
      <Link href='/api/auth/login'>Sign in</Link>
      <Link href='/api/auth/logout'>Sign out</Link>
      <Link href="/?modal=true">Subscribe</Link>
      {showModal && <TheModal>
        <TestName/>
      </TheModal>}
    </MainStyled>
  )
}

