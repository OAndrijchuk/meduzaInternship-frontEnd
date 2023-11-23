"use client"
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const SignInWithSocial = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || "/";
  return (
      <>
          <Button
              sx={{ width: '100%', border:"1px solid"}}
              size='large'
              onClick={() => signIn('auth0', { callbackUrl })}
              type='button'
            >Login from social
          </Button>
      </>
  )
}

export default SignInWithSocial