'use client'
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserInfoContainer = styled(Paper)(() => ({
    position:"relative",
    minWidth: "320px",
    height: "100%",
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: '20px',
    gap:'10px',
}));

export const FormStyled = styled(Box)(() => ({
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: '15px',
}));
export const GeneralInfoStyled = styled('div')(() => ({
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-start",
    gap: '15px',
}));