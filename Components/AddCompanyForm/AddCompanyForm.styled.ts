'use client'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

export const FormStyled = styled('form')(({ theme }) => ({
    minWidth:"100%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
}));

