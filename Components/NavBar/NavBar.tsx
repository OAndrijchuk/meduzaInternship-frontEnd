import React from 'react'
import Stack from '@mui/material/Stack'
import Link from 'next/link';
import { Item } from './NavBar.styled';

const NavBar = () => {
  return (
      <nav>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link href='/'><Item>Home</Item></Link>
          <Link href='/about'><Item>About</Item></Link>
          <Link href='/signUp '><Item>Sign up</Item></Link>
          <Link href='/api/login'><Item>Sign in</Item></Link>
          <Link href='/api/logout'><Item>Sign out</Item></Link>
          <Link href='/users '><Item>Users</Item></Link>
        <Link href='/companies '> <Item>Companies</Item></Link>
        </Stack>
      </nav>
  )
}

export {NavBar}