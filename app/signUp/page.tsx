import SignUpForm from "@/Components/SignUpForm/SignUpForm";
import { Paper } from "@mui/material";
import { ContainerStyled } from "./signUp.styled";


export default async function SignUp() {

  return (
    <ContainerStyled >
       <Paper elevation={3} component={'div'} sx={{
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      width: '45ch',
      m: '40px auto',
      p: '40px 20px'
      }}>
        <SignUpForm />
      </Paper>

    </ContainerStyled>
  )
}
