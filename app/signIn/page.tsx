
import SignInWithSocial from '../../Components/SignInWithSocial/SignInWithSocial';
import SignInForm from '@/Components/SignInForm/SignInForm';
import { ContainerStyled } from './signIn.styled';
import { Paper } from '@mui/material';



export default async function SignIn() {

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
        <SignInForm />
        <SignInWithSocial />
      </Paper>
      
    </ContainerStyled>
  )
}
