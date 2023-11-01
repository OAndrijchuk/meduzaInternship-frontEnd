'use client'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

export const ModalCont = styled(Box)({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  backgroundColor: 'white',
  padding:15,
  border: '2px solid #000',
  borderRadius:25,
  boxShadow: 24,
  p: 4,
});
export const ModalOverlay = styled(Box)({
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
});
