import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React from 'react'

const ShowPasswordBtn = ({handleClick, isPasswordShow}) => {
  return (
    <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClick}
                >
                  {isPasswordShow ? <VisibilityOff /> : <Visibility />}
                </IconButton>
      </InputAdornment>
  )
}

export default ShowPasswordBtn