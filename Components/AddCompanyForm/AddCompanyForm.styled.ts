'use client'
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';

export const FormStyled = styled(Box)(({ theme }) => ({
    minWidth:"100%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
}));

