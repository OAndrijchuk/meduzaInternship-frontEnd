'use client'
import { CompanyContainerStyled } from "./Company-profile.styled";
import { useGetCompanyInfoQuery, useRemoveCompanyMutation, useRemoveMemberMutation, useUpdateCompanyInfoMutation } from "@/redux/companies/companiesAPI";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useState } from "react";
import UsersList from "@/Components/UsersList/UsersList";
import { getUserEmail } from "@/redux/users/selectors";
import InviteAndRequestList from "@/Components/Invite&RequestList/InviteAndRequestList";
import ControlButtons from "@/Components/ControlButtons/ControlButtons";
import { useFormik } from 'formik';
import * as Yup from "yup";
import CustomInput from "@/Components/CustomInput/CustomInput";
import { useRouter } from "next/navigation";
import { useRemoveInviteMutation } from "@/redux/companies/invitesAPI";
import { ActionType } from "@/Types";
import { useUpdateRequestMutation } from "@/redux/users/requestsUser";

type Props = {
  params: {
    companyId: string;
  };
};

export default function CompanyProfile({ params: { companyId } }: Props) {
  const route = useRouter();
  const userEmail = useSelector(getUserEmail);
  const { data, isSuccess } = useGetCompanyInfoQuery(companyId)
  const isOwner = data?.owner.email === userEmail;
  const [value, setValue] = useState(0);
  const employee = data?.employee.map((el: any) => el.userId);
  const [readOnly, setReadOnly] = useState(true);
  const [updateCompanyInfo, {}] = useUpdateCompanyInfoMutation();
  const [removeCompanyById, {}] = useRemoveCompanyMutation();
  const [removeInviteById, {}] = useRemoveInviteMutation();
  const [removeMemberById, {}] = useRemoveMemberMutation();
  const [updateRequestById, {}] = useUpdateRequestMutation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const removeCompany = async () => {
    await removeCompanyById(companyId)
    route.push('/companies')
  }
  const removeInvite = async (
    { userId, id, companyId: idCompany }: { userId: number, id: number, companyId: number }) => {
    await removeInviteById({companyId:idCompany, inviteId:id})
  }
  const removeMember = async (
    { id }: { id: number }) => {
    await removeMemberById({body:{memberId:id}, id:companyId})
  }
  const acceptRequest = async (
    { id }: { id: number }) => {
    await updateRequestById({body:{status:'fulfilled'}, id})
  }
  const rejectedRequest = async (
    { id }: { id: number }) => {
    await updateRequestById({body:{status:'rejected'}, id})
  }

  const formik = useFormik({
    initialValues:{ companyName: data?.companyName, description: data?.description },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().min(3, 'Company name should be of minimum 3 characters length').required('Company name is required'),
      description: Yup.string().min(6,'Description should be of minimum 6 characters length')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const { companyName, description } = values;
        if ((!companyName || companyName === data?.companyName)&&(!description || description === data?.description)) {
          setReadOnly(true); 
          resetForm();
          return;
        }
        await updateCompanyInfo({values, companyId})
        setReadOnly(true)
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isSuccess && !formik.values.companyName && !formik.values.description) {
    formik.values.companyName = data?.companyName;
    formik.values.description = data?.description;
  }

  return (
    <>
      {isSuccess&&<CompanyContainerStyled >
        {readOnly
          ? <h1>{data.companyName}</h1>
          : <CustomInput id={"companyName"} label={"CompanyName"} formik={formik} isReadOnly={readOnly} />}
        <CustomInput id={"description"} label={"Description"} formik={formik} isReadOnly={ readOnly } isMultiline={true} />
        
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom:'20px' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Employee" />
              {isOwner && <Tab label="Invitations" />}
              {isOwner && <Tab label="Candidates" />}
            </Tabs>
          </Box>
            {+value === 0 && <UsersList data={employee} actionButtons={ isOwner?{remove:removeMember}:{} } />}
            {+value === 1 && <InviteAndRequestList data={data.invitations} actionButtons={{ remove: removeInvite }} />}
            {+value === 2 && <InviteAndRequestList data={data.candidates} type={ActionType.request} actionButtons={{ accept:acceptRequest ,reject:rejectedRequest }}/>}
        </Box>
        {isOwner && <ControlButtons remove={removeCompany} edit={()=>setReadOnly(false)} saveChanges={formik.handleSubmit} isEdit={readOnly} />}
      </CompanyContainerStyled>}
    </>
  )
}
