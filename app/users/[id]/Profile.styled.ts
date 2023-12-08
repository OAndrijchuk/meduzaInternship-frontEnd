'use client'
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserInfoContainer = styled(Paper)(() => ({
    minWidth: "320px",
    height: "100%",
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: '20px',
    gap:'10px',
}));