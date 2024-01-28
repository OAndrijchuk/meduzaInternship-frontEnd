'use client'
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonsContainer = styled(Box)(() => ({
    position:"absolute",
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: '15px',
    bottom: '20px',
    right:'20px',
}));