import React from 'react'
import { HeaderStyled } from './Header.styled'
import { NavBar } from '../NavBar/NavBar'

const Header = () => {
  return (
      <HeaderStyled>
          <NavBar />
      </HeaderStyled>
 
  )
}

export  {Header}