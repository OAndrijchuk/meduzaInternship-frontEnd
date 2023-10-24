 import * as dotenv from 'dotenv';
import Button from '@mui/material/Button';
import { HeroTitle } from '@/Components/HeroTitle/HeroTitle';
import { MainStyled } from './HomePage.styled';

dotenv.config();

export default async function Home() {
   console.log(`"App started on port: ${process.env.PORT}"`);
  return (
    <MainStyled >
      <HeroTitle />
       <Button variant="contained">Subscribe</Button>
    </MainStyled>
  )
}
