'use client'
import { styled } from "@mui/material/styles";

export const ContainerStyled:any = styled("div")(() => ({
    width: "100%",
    minHeight: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 50
}));