"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MailOutline } from '@mui/icons-material';
import { Button, Paper, TextField, Typography} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useSignInMutation } from '@/redux/users/userAPI';
import { useRouter } from 'next/navigation';


export default function SignInForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [signIn, { data, isSuccess, isError, error, isLoading }] = useSignInMutation();
  const router = useRouter()

    React.useEffect(() => {
        if (data?.token && isSuccess) {
        router.push("/")
      }
    },[data, router, isSuccess])

  const handleClickShowPassword = () => setShowPassword((show) => !show);


const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema:  Yup.object().shape({
    email: Yup.string().email('Email is not correct').required('Email is required'),
    password: Yup.string().min(6,'Password should be of minimum 8 characters length').required('Password is required'),
  }),
  onSubmit: async (values) => {
    const { email, password } = values;
    const userData = await signIn({ email, password }).unwrap()
    },
});
  
return (
  <>
    {isLoading && <h1>Loading...</h1>}
    {isSuccess && <h1>{`Hallo ${data?.user?.userName}`}</h1>}
    <Paper elevation={3} component={'form'} onSubmit={formik.handleSubmit} sx={{
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      width: '45ch',
      m: '40px auto',
      p: '40px 20px'
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
      <a href='/api/auth/login'>Sign in</a>
      <a href='/api/auth/logout'>Sign out</a>
    </Paper></>
  );
}