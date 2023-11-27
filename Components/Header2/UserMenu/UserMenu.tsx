import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setUserData, setUserToken } from '@/redux/users/usersSlice';

const settings = [
  { label: 'Profile', path: '/profile' },
  { label: 'Logout', path: '/' }
];

const UserMenu = () => {
  const dispatch = useDispatch()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { logout } = useAuth0();
    
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
    
  const handleCloseUserMenu = ( path:string ) => {
    if (path === '/') {
      dispatch(setUserData({}));
      dispatch(setUserToken(''));
      logout();
    }
    setAnchorElUser(null);
  };
  return (
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src="#" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((link) => (
                <MenuItem key={link.label} onClick={()=>handleCloseUserMenu(link.path)}>
                  <Typography textAlign="center" sx={{fontWeight:"600",color:"#1976d2"}}>{link.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
  )
}

export default UserMenu