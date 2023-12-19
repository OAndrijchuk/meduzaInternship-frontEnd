import { Paper, Typography, styled } from "@mui/material";
import { string } from "yup";


export const UserNameLink = styled(Typography)(({ theme }) => ({
 fontWeight:"600",
"&:hover": {
    color: '#1A2027',
    cursor:"pointer",
  },
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

export const StatusStyled = styled(Typography)(({ theme }) => ({
    // color: $status==='rejected'? theme.palette.error.main:$status==='pending'?theme.palette.info.main:theme.palette.success.main
}));