'use client'
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding:8,
  textAlign: 'center',
}));