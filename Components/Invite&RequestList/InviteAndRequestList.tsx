import { IInviteOrRequest} from '@/Types';
import { Avatar, Box, Stack, Typography} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Item, StatusStyled, UserNameLink } from './InviteAndRequestList.styled';

const InviteAndRequestList = ({ data = [] }: { data: Array<IInviteOrRequest> }) => {
    const route = useRouter();
    
  return (
    <Box>
      <Stack spacing={2}>
        {data.map(({user, id, company, status}) => (
        <Item key={id}>
            <Typography variant='h5'>From:</Typography>
            <Box>
                <UserNameLink onClick={() => route.push(`/users/${company.id}`)} >{company.companyName}</UserNameLink>
                <Typography component="p">{company.owner.userName}</Typography>
            </Box>
            <Typography variant='h5'>To:</Typography>
            <Avatar alt={user.userName} src={user.avatar} />
            <Box>
              <UserNameLink onClick={() => route.push(`/users/${user.id}`)} >{user.userName}</UserNameLink>
              <Typography component="p">{user.email}</Typography>
            </Box>
            <StatusStyled variant='h5'>{status}</StatusStyled>
        </Item>))}
      </Stack>
    </Box>
  );
}

export default InviteAndRequestList