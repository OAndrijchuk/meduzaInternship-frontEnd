
import SignInForm from '@/Components/SignInForm/SignInForm';
import { ContainerStyled } from './signIn.styled';


export default async function SignIn() {

  return (
    <ContainerStyled >
      <SignInForm/>
    </ContainerStyled>
  )
}
