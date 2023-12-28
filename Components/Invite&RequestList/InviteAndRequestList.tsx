import { ActionButtonsType, ActionType, IInviteOrRequest} from '@/Types';
import { Avatar, Box, Stack, Typography} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Item, StatusStyled, UserNameLink } from './InviteAndRequestList.styled';
import ActionButtons from '../ActionButtons/ActionButtons';

// enum Types {
//   invite = 'invite',
//   request = 'request'
// };

interface Props {
  data: Array<IInviteOrRequest>
  type?: ActionType
  actionButtons?: ActionButtonsType;
}

const InviteAndRequestList = ({ data = [], type = ActionType.invite, actionButtons }: Props) => {
  const route = useRouter();
  
  return (
    <Box>
      <Stack spacing={2}>
        {data.map(({ user, id, company, status }) => {
          const companyJSX = <Box>
                                <UserNameLink onClick={() => route.push(`/companies/${company.id}`)} >{company.companyName}</UserNameLink>
                                <Typography component="p">{company?.owner?.userName}</Typography>
                              </Box>;
          const userJSX = <>
                            <Avatar alt={user.userName} src={user.avatar} />
                            <Box>
                              <UserNameLink onClick={() => route.push(`/users/${user.id}`)} >{user.userName}</UserNameLink>
                              <Typography component="p">{user.email}</Typography>
                            </Box>
                          </>;

          return <Item key={id}>
                    <Typography variant='h5'>From:</Typography>
                    {type === ActionType.invite ? companyJSX : userJSX}
                    <Typography variant='h5'>To:</Typography>
                    {type === ActionType.invite ? userJSX : companyJSX}
                    <StatusStyled variant='h5'>{status}</StatusStyled>
                     <ActionButtons actions={status==='pending'?{...actionButtons, add: null}:{...actionButtons, accept: null, reject: null, add: null}} id={{ userId:user.id, id, companyId:company.id}} />
                  </Item>})
        }
      </Stack>
    </Box>
        
  )
}

export default InviteAndRequestList