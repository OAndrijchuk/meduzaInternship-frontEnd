'use client'
import { useGetProfileQuery, useRemoveAccountMutation, useUpdateUserInfoMutation } from '@/redux/users/userAPI';
import React, { useState } from 'react'
import { FormStyled, GeneralInfoStyled, UserInfoContainer } from './me.styled';
import { Avatar, Box, FormControl, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Clear, Done } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import PasswordField from '@/Components/PasswordField/PasswordField';
import ControlButtons from '@/Components/ControlButtons/ControlButtons';
import InviteAndRequestList from '@/Components/Invite&RequestList/InviteAndRequestList';
import CompaniesList from '@/Components/CompaniesList/CompaniesList';
import { useUpdateInviteMutation } from '@/redux/companies/invitesAPI';
import { ActionType } from '@/Types';
import { useRemoveRequestMutation } from '@/redux/users/requestsUser';
import { useRemoveMemberMutation } from '@/redux/companies/companiesAPI';

type updateUserData = {
  userName?: string
  password?:  string
}

export default function Profile() {
  const [readOnly, setReadOnly] = useState(true);
  const [value, setValue] = useState(0);
  const { data: user, isError,  isSuccess } = useGetProfileQuery();
  const [removeMe, { }] = useRemoveAccountMutation();
  const [updateMe, { }] = useUpdateUserInfoMutation();
  const [updateInvite, {}] = useUpdateInviteMutation();
  const [removeRequestById, {}] = useRemoveRequestMutation();
  const [removeMemberById, {}] = useRemoveMemberMutation();

  const saveChanges = () => {
    formik.handleSubmit();
  }
  const removeProfile = async () => {
    await removeMe({});
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const acceptOffer = async ({ userId, id, companyId}:{ userId:number, id:number, companyId:number}) => {
    await updateInvite({values:{status:"fulfilled"}, companyId, inviteId:id})
  }
  const rejectOffer = async ({ userId, id, companyId}:{ userId:number, id:number, companyId:number}) => {
     await updateInvite({values:{status:"rejected"}, companyId, inviteId:id})
  }
  const removeRequest = async ({ id }:{  id:number}) => {
     await removeRequestById({id})
  }
  const removeMember = async ({ id }: { id: number }) => {
     await removeMemberById({body:{memberId:user.id}, id})
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
    let newOptions:updateUserData = {userName, password: newPassword}
    if (!userName) delete newOptions.userName;
    if (!newPassword) delete newOptions.password;
    
    updateMe(newOptions).then((rez:any) => {
      resetForm();
      setReadOnly(true)
    }).catch((err:any)=>console.log(err))
    
    },
  });
  
  return (
    <>
      {isSuccess && <UserInfoContainer>
        <GeneralInfoStyled>
          <Avatar alt={user?.userName} src={user?.avatar} sx={{ width: '150px', height: '150px', alignSelf: 'center' }} />
      <FormStyled
        component={'form'}
            sx={{ width: "100%" }}
          >
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
          helperText={''+(formik.touched.userName && formik.errors.userName)}
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
        </GeneralInfoStyled>
      
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom:'20px' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Work" />
              <Tab label="Requests" />
              <Tab label="Offers" />
            </Tabs>
          </Box>
            {+value === 0 &&
              <CompaniesList
                data={user.myWork.map((work:any)=>work.companyId)}
                actionButtons={{remove:removeMember}}
              />}
          {+value === 1 && <InviteAndRequestList data={user.candidates} type={ActionType.request} actionButtons={{ remove: removeRequest}}/> }
            {+value === 2 && <InviteAndRequestList data={user.offers} actionButtons={{ accept:acceptOffer, reject:rejectOffer}} />}
        </Box>
        <ControlButtons remove={removeProfile} edit={() => setReadOnly(false)} saveChanges={saveChanges} isEdit={readOnly} />
      </UserInfoContainer>
}
  </>
    
  )
}

