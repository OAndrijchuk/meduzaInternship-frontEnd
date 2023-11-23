"use client"
import React from 'react'
import { HeaderStyled } from './Header.styled'
import { NavBar } from '../NavBar/NavBar'
import {useAuth0} from "@auth0/auth0-react";
import { Button } from '@mui/material';
import { useAppDispatch } from '@/hooks/redux';
import { setUserToken } from '@/redux/users/usersSlice';


const Header = () => {
  const dispatch = useAppDispatch();
  const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
   } = useAuth0();
  return (
      <HeaderStyled>
      <NavBar />
      <Button onClick={() => {
        logout({ returnTo: window.location.origin });
        dispatch(setUserToken(""));
      }}>Log out </Button>
      </HeaderStyled>
 
  )
}

export  {Header}