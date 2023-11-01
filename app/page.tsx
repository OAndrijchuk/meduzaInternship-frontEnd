"use client"
import * as dotenv from 'dotenv';
import Button from '@mui/material/Button';
import { HeroTitle } from '@/Components/HeroTitle/HeroTitle';
import { MainStyled } from './HomePage.styled';
import TheModal from '@/Components/Modal/TheModal';
import React from 'react'
import Link from 'next/link';

dotenv.config();

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
const showModal = searchParams?.modal;
  return (
    <MainStyled >
      <HeroTitle />
      <Link href="/?modal=true">Subscribe</Link>
      {showModal && <TheModal><h1>This is modal text</h1></TheModal>}
    </MainStyled>
  )
}
