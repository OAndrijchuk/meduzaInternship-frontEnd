'use client'
import { useAppSelector } from '@/hooks/redux'
import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
const isLoading = useAppSelector(state=>state.user.isLoading)
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loader