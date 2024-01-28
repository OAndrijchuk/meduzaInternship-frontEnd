import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Item, UserNameLink } from './CompaniesList.styled';
import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ActionButtonsType, ICompany } from '@/Types';
import ActionButtons from '../ActionButtons/ActionButtons';

type Props = {
  data: ICompany[]
  actionButtons?: ActionButtonsType;
}

const CompaniesList = ({ data = [], actionButtons,  }: Props) => {
  const route = useRouter();
  return (
    <Box sx={{height:'100%', overflowY:'auto'}} >
      <Stack component='ul' spacing={2} sx={{listStyleType: "none", padding: 0}}>
        {data.map(({id, companyName, owner, employee, logo}) => (
          <Item component='li' key={id}>
            <Avatar alt={companyName} src={logo} />
            <Box>
              <UserNameLink onClick={()=>route.push(`companies/${id}`)} >{companyName}</UserNameLink>
              {owner?.userName&&<Typography component="p">{`Owner: ${owner.userName}`}</Typography>}
              {employee&&<Typography component="p">{`Staff: ${employee.length}`}</Typography>}
            </Box>
             <ActionButtons actions={{...actionButtons}} id={{id}} />
          </Item>))}
      </Stack>
    </Box>
  );
}

export default CompaniesList