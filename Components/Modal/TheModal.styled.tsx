'use client'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

export const ModalCont = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  backgroundColor: 'white',
  padding: 15,
  border: '2px solid #000',
  borderRadius: theme.spacing(3), 
  boxShadow: theme.shadows[24],
  p: theme.spacing(4), 
}));
export const ModalOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width:'100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(34, 13, 91, 0.23)',
  backdropFilter: 'blur(3.5px)',
}));
