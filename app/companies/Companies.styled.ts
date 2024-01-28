'use client'
import { styled } from "@mui/material/styles";

export const MainStyled = styled("main")(() => ({
    width: "100%",
    height: "calc(100vh - 68px - 100px)",
    display: "flex",
    flexDirection: "column",
    overflow:'auto',
}));
export const AddCompanyBtnStyled = styled('span')(() => ({
    position:'fixed',
    bottom: 100,
    right: 20,
}));