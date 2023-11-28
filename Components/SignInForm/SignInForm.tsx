"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MailOutline } from '@mui/icons-material';
import { Box, Button, Paper, TextField, Typography} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useSignInMutation } from '@/redux/users/userAPI';
import { useRouter } from 'next/navigation';
import { useAuth0 } from "@auth0/auth0-react";
import { setUserData, setUserToken } from '@/redux/users/usersSlice';
import { useAppDispatch } from '@/hooks/redux';
import { signIn } from 'next-auth/react';


export default function SignInForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [manualSignIn, { data: manualMe, isSuccess: isSignIn }] = useSignInMutation();
  const dispatch = useAppDispatch();
  const router = useRouter()
const {
        isLoading:isLoad,
        isAuthenticated,
        error:err,
        loginWithRedirect,
        logout,
        getAccessTokenSilently
   } = useAuth0();
    React.useEffect(() => {
      if (isSignIn || isAuthenticated) {
        router.push("/")
      }
    }, [ router, isSignIn, isAuthenticated])
  
   

const handleClickShowPassword = () => setShowPassword((show) => !show);

const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema:  Yup.object().shape({
    email: Yup.string().email('Email is not correct').required('Email is required'),
    password: Yup.string().min(6,'Password should be of minimum 8 characters length').required('Password is required'),
  }),
  onSubmit: async (values) => {
    const { email, password } = values;
    const {user,token} = await manualSignIn({ email, password }).unwrap()
    },
});
  
return (
  <>
    <Box
      component={'form'}
      onSubmit={formik.handleSubmit}
      sx={{
        width:"100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}>
      <Typography component="h2" sx={{ fontSize: 24, fontWeight: 600, color: 'rgba(0, 0, 0, 0.54)' }}>Sign In</Typography>
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <TextField
          id="email"
          type='email'
          name='email'
          variant="standard"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ p: 1}}>
                <MailOutline />
              </InputAdornment>)
          }}  
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <TextField
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name='password'
          label="Password"
          variant="standard"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>)
          }}
        />
      </FormControl>
      <Button variant="contained" type="submit" sx={{ width: '100%' }} size='large'>Sign In</Button>
    </Box>
  </>
  );
}