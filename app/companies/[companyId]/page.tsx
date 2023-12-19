'use client'
import { CompanyContainerStyled } from "./Company-profile.styled";
import { Typography } from "@mui/material";
import { useGetCompanyInfoQuery } from "@/redux/companies/companiesAPI";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from "react";
import UsersList from "@/Components/UsersList/UsersList";
import { getUserEmail } from "@/redux/users/selectors";
import InviteAndRequestList from "@/Components/Invite&RequestList/InviteAndRequestList";

type Props = {
  params: {
    companyId: string;
  };
};

export default function CompanyProfile({ params: { companyId } }: Props) {
  const userEmail = useSelector(getUserEmail);
  const { data, isSuccess } = useGetCompanyInfoQuery(companyId)
  const isOwner = data?.owner.email === userEmail;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {isSuccess&&<CompanyContainerStyled >
        <h1>{data.companyName}</h1>
        <Typography component='p'>{data.owner.userName}</Typography>
        <Typography component='p'>{data.description}</Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom:'20px' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Employee" />
              {isOwner && <Tab label="Invitations" />}
              {isOwner && <Tab label="Candidates" />}
            </Tabs>
          </Box>
            {+value === 0 && <UsersList data={data.employee} />}
            {+value === 1 && <InviteAndRequestList data={data.invitations}/>}
            {+value === 2 && <InviteAndRequestList data={data.candidates}/>}
        </Box>
      </CompanyContainerStyled>}
    </>
  )
}
// candidates
// : 
// []
// companyName
// : 
// "OlehCompany"
// createdAt
// : 
// "2023-12-13T18:59:14.110Z"
// description
// : 
// "this is string from description..."
// employee
// : 
// [{…}]
// id
// : 
// 1
// invitations
// : 
// [{…}]
// owner: {id: 1, userName: 'MyNameOleh', email: 'andrOleh@mail.com', isVerify: false, createdAt: '2023-12-13T18:58:22.151Z', …}
// updatedAt
// : 
// "2023-12-13T18:59:14.110Z"