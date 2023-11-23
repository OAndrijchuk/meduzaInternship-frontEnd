import { Item } from '@/Components/NavBar/NavBar.styled'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const linkStyled = {
  fontWeight: 600,
  textDecoration: 'none',

  color: '#1976d2',
  padding: '6px',
  border: "1px solid",
  borderRadius: '4px',
  backgroundColor: "white",
}

const AuthMenu = () => {
  return (
    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link href='/signUp' style={{textDecoration:'none'}}><Typography component='p' sx={linkStyled}>Sign up</Typography></Link>
          <Link href='/signIn'style={{textDecoration:'none'}}><Typography component='p' sx={linkStyled}>Sign in</Typography></Link>
        </Stack>
  )
}

export default AuthMenu