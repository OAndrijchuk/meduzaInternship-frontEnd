'use client'
import { styled } from "@mui/material/styles";

export const MainStyled = styled("main")(() => ({
  width: "100%",
  height: "calc(100vh - 68px - 80px)",
  display: "flex",
  flexDirection: "column",
  gap: 50,
  padding: "20px 20px 0",
  boxSizing:"border-box",
    
}));