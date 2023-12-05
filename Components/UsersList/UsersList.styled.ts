'use client'
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainStyled = styled("main")(() => ({
    width: "100%",
    minHeight: "calc(100vh - 68px - 80px)",
    display: "flex",
    flexDirection: "column",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    gap:"25px",
}));

export const UserNameLink = styled(Typography)(({ theme }) => ({
 fontWeight:"600",
"&:hover": {
    color: '#1A2027',
    cursor:"pointer",
  },
}));