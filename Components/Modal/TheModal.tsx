'use client'
import * as React from 'react';
import { CloseModalBtn, ModalCont, ModalOverlay } from './TheModal.styled';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props={
  children: React.ReactNode

} 

export default function TheModal({children}: Props) {
  const router = useRouter()
  const pathname = usePathname()

   React.useEffect(() => {
    const handleEscape:any = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        router.push(pathname);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [router, pathname]);

  return (

      <ModalOverlay onClick={e => {
        if (e.target === e.currentTarget) {
          router.push(pathname);
        }
      }}>
        <ModalCont>
          {children}
          <CloseModalBtn  size='large' type='button' onClick={()=>router.push(pathname)}>Close</CloseModalBtn>
        </ModalCont>
         
      </ModalOverlay>

  );
}