import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Item, UserNameLink } from './UsersList.styled';
import { Avatar, Typography } from '@mui/material';
import { IUser } from '@/Types/IUser';
import { useRouter } from 'next/navigation';
import ActionButtons from '../ActionButtons/ActionButtons';
import { ActionButtonsType } from '@/Types';
import { useAppSelector } from '@/hooks/redux';
import { getUser } from '@/redux/users/selectors';


type Props = {
  data: Array<IUser>;
  actionButtons?: ActionButtonsType;
}

const UsersList = ({ data = [], actionButtons }: Props) => {

  const route = useRouter();
  const { id: userId }:IUser = useAppSelector(getUser)

  return (
    <Box>
      <Stack spacing={2}>
        {data.map(({id, userName, avatar, email}: IUser) => (
          <Item key={id}>
            <Avatar alt={userName} src={avatar} />
            <Box>
              <UserNameLink
                onClick={() =>id === userId ? route.push(`/me`) : route.push(`/users/${id}`)}
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