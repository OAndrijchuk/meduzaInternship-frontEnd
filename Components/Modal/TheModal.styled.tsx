'use client'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

export const ModalCont = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  minWidth:"50vw",
  backgroundColor: 'white',
  padding: "40px 20px",
  border: '1px solid #000',
  borderRadius: theme.spacing(1.5), 
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
  backgroundColor: 'rgba(23, 18, 169, 0.23)',
  backdropFilter: 'blur(3.5px)',
}));
export const CloseModalBtn = styled(Button)(({ theme }) => ({
  width: '100%',
  margin: '16px 0 0 0',
  border: "1px solid",     
}));
