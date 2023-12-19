import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Item, UserNameLink } from './CompaniesList.styled';
import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ICompany } from '@/Types';


const CompaniesList = ({ data = [] }: { data: [ICompany] }) => {
  const route = useRouter();
  return (
    <Box >
      <Stack component='ul' spacing={2} >
        {data.map(({id, companyName, owner, employee, logo}) => (
          <Item component='li' key={id}>
            <Avatar alt={companyName} src={logo} />
            <Box>
              <UserNameLink onClick={()=>route.push(`companies/${id}`)} >{companyName}</UserNameLink>
              <Typography component="p">{`Owner: ${owner.userName}`}</Typography>
              <Typography component="p">{`Staff: ${employee.length}`}</Typography>
            </Box>
          </Item>))}
      </Stack>
    </Box>
  );
}

export default CompaniesList