'use client'
import { useGetProfileQuery, useRemoveAccountMutation, useUpdateUserInfoMutation } from '@/redux/users/userAPI';
import React, { useState } from 'react'
import { ButtonsContainer, FormStyled, UserInfoContainer } from './me.styled';
import { Avatar, FormControl, TextField, Typography } from '@mui/material';
import { Clear, Done, Edit, Delete } from '@mui/icons-material';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import { useFormik } from 'formik';
import * as Yup from "yup";
import PasswordField from '@/Components/PasswordField/PasswordField';
import FAButton from '@/Components/FAButton/FAButton';

export default function Profile() {
  const [readOnly, setReadOnly] = useState(true);
  const { data: user, isError,  isSuccess } = useGetProfileQuery({});
  const [removeMe, { }] = useRemoveAccountMutation();
  const [updateMe, { }] = useUpdateUserInfoMutation();

  const changeSettings = () => {
    setReadOnly(false)
  }
  const saveChanges = () => {
    formik.handleSubmit();
  }
  const removeProfile = async () => {
    await removeMe({});

  }
 
  const formik = useFormik({
  initialValues: { userName:user?.userName, newPassword: '', newPasswordConfirm:"" },
  validationSchema: Yup.object().shape({
    userName: Yup.string().min(3, 'Login should be of minimum 3 characters length'),
    newPassword: Yup.string().min(6,'Password should be of minimum 6 characters length'),
    newPasswordConfirm: Yup.string().min(6,'Password should be of minimum 6 characters length'),
  }),

  onSubmit: async (values, { resetForm }) => {
    const { newPassword, userName, newPasswordConfirm } = values;
    if (!newPassword && (!userName || userName === user.userName)) {
      setReadOnly(true);
      resetForm();
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      alert("Password is not confirm");
      return;
    }
    let newOptions = {}
    if (userName) newOptions.userName = userName
    if (newPassword) newOptions.password = newPassword
    
    updateMe(newOptions).then(rez => {
      resetForm();
      setReadOnly(true)
    }).catch((err)=>console.log(err))
    
    },
  });
  
  return (
    <>
    {isError&&<h1>isError</h1> }
    {isSuccess &&<UserInfoContainer>
      <Avatar alt={user?.userName} src={user?.avatar} sx={{ width: '150px', height: '150px', alignSelf: 'center' }} />
      <FormStyled
        component={'form'}
      sx={{m:"0 auto", minWidth:"60%"}}>
        <FormControl sx={{m: 1, width: '100% ' }} variant="standard">
        <TextField
          id="userName"
          type='text'
          name='userName'
          variant="standard"
          label="Name"
          InputProps={{
            readOnly: readOnly,
          }}
          value={formik.values.userName||user?.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
        <TextField
          disabled
          id="email"
          variant="standard"
          label="Email"
          InputProps={{
            readOnly: true,
          }}
          defaultValue={user?.email}
        />
      </FormControl>
          {!readOnly && (
            <>
              <PasswordField id="newPassword" label="New password" formik={formik} />
              <PasswordField id="newPasswordConfirm" label="New password confirm" formik={formik} />
            </>)}
          <Typography component='p' sx={{ display: 'flex', alignItems: 'bottom', gap: '20px', ml: "10px" }}>
            Verification account {user?.isVerify ? <Done color='success' /> : <Clear color='error' />}
          </Typography>
      </FormStyled>
        <ButtonsContainer>
          <FAButton onClick={removeProfile} icon={<Delete />} helpText='Remove account' colorBG='error'/>
          {readOnly
            ? <FAButton onClick={changeSettings} icon={<Edit />} helpText='Change settings'/>
            : <FAButton onClick={saveChanges} icon={<SendAndArchiveIcon />} helpText='Save changes'/>
          }
        
      </ButtonsContainer>
      </UserInfoContainer>
}
  </>
    
  )
}

