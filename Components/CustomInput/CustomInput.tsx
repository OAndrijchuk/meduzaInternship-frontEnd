import { FormControl, TextField } from '@mui/material';
import React from 'react'

type passOptions = {
    id: string;
    label: string;
    formik: any;
    isMultiline?: boolean;
    rows?:number
}


const CustomInput = ({id, label, formik, isMultiline=false, rows=5}: passOptions) => {
    
  return (
     <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <TextField
          id={id}
          type='text'
          name={id}
          variant="standard"
          label={label}
          multiline={isMultiline}
          rows={rows}
          value={formik.values[id]}
          onChange={formik.handleChange}
          error={formik.touched[id] && Boolean(formik.errors[id])}
          helperText={formik.touched[id] && formik.errors[id]}
        />
          </FormControl>
  )
}

export default CustomInput