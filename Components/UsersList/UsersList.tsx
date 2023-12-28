import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Item, UserNameLink } from './UsersList.styled';
import { Avatar, Typography } from '@mui/material';
import { IUser } from '@/Types/IUser';
import { useRouter } from 'next/navigation';
import ActionButtons from '../ActionButtons/ActionButtons';
import { ActionButtonsType } from '@/Types';


type Props = {
  data: Array<IUser>;
  actionButtons?: ActionButtonsType;
}

const UsersList = ({ data = [], actionButtons }: Props) => {
  const route = useRouter();
  return (
    <Box>
      <Stack spacing={2}>
        {data.map(({id, userName, avatar, email}) => (
          <Item key={id}>
            <Avatar alt={userName} src={avatar} />
            <Box>
              <UserNameLink
                onClick={() => route.push(`/users/${id}`)}
              >{userName}</UserNameLink>
              <Typography component="p">{email}</Typography>
            </Box>
            <ActionButtons actions={{...actionButtons}} id={{id}} />
          </Item>))}
      </Stack>
    </Box>
  );
}

export default UsersList