"use client"
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const SignInWithSocial = () => {

   const {
        loginWithRedirect,
   } = useAuth0();
  
  return (
      <>
          <Button
              sx={{ width: '100%', border:"1px solid"}}
              size='large'
              onClick={loginWithRedirect}
              type='button'
            >Login from social
          </Button>
      </>
  )
}

export default SignInWithSocial