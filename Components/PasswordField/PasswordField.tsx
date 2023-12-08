import { FormControl, TextField } from '@mui/material';
import React from 'react'
import ShowPasswordBtn from '../ShowPasswordBtn/ShowPasswordBtn';

type passOptions = {
    id: string;
    label: string;
    formik: any;
}


const PasswordField = ({id, label, formik}: passOptions) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
  return (
     <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <TextField
          id={id}
           type={showPassword ? 'text' : 'password'}
          name={id}
          variant="standard"
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          error={formik.touched[id] && Boolean(formik.errors[id])}
          helperText={formik.touched[id] && formik.errors[id]}
          InputProps={{
            endAdornment: <ShowPasswordBtn handleClick={handleClickShowPassword } isPasswordShow={showPassword} />
          }}/>
          </FormControl>
  )
}

export default PasswordField