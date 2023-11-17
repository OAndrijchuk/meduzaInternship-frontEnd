'use client'
import * as React from 'react';
import { ModalCont, ModalOverlay } from './TheModal.styled';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

type Props={
  children: React.ReactNode
} 


export default function TheModal({children}: Props) {
  const router = useRouter()
   React.useEffect(() => {
    const handleEscape:any = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        router.back()
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [router]);

  return (

      <ModalOverlay onClick={e => {
        if (e.target === e.currentTarget) {
          router.back()
        }
      }}>
        <ModalCont>
          {children}
          <Button type='button' onClick={router.back}>Close</Button>
        </ModalCont>
         
      </ModalOverlay>

  );
}