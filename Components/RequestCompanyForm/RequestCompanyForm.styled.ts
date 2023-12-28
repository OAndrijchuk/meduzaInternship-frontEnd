import { styled } from "@mui/material";

export const FormStyled = styled('form')(({ theme }) => ({
    minWidth:"100%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
}));