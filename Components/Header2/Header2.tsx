"use client"
import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';
import { useDispatch } from 'react-redux';
import { setUserData, setUserToken } from '@/redux/users/usersSlice';
import { useAuth0 } from '@auth0/auth0-react';
import { getUserToken } from '@/redux/users/selectors';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/redux';



const pages = [
    { label: 'About', link: '/about' },
    { label: 'Users', link: '/users' },
    { label: 'Companies', link: '/companies' }
];

function Header2() {
    const router = useRouter()
    const dispatch = useDispatch();
    const isAuth = useAppSelector(getUserToken)
  // ==============================auth0-react======================    
       const {
        isLoading:isLoad,
        isAuthenticated,
        error: err,
        user,
        loginWithRedirect,
        logout,
        getAccessTokenSilently
       } = useAuth0();
  
     const getToken = async () => {
     try {
         if (isAuthenticated) {
            const { email, name } = user;
            const token = await getAccessTokenSilently()
            dispatch(setUserToken(token));
            dispatch(setUserData({ email, userName: name }));
        }
     } catch (error) {
         
     } 
  }
useEffect(() => {
    getToken()
  }, [isAuthenticated]);
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (link = '') => {
        switch (link) {
            case "/about":
                router.push("/about")
                break;
            case "/users":
                router.push("/users")
                break;
            case "/companies":
                router.push("/companies")
                break;
        
            default:
                router.push("/")
                break;
        }
        setAnchorElNav(null);
    };



    return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
        {pages.map((page) => (
                <MenuItem  onClick={()=>handleCloseNavMenu(page.link)} key={page.label}>
                    <Typography textAlign="center" sx={{fontWeight:"600",color:"#1976d2"}}>{page.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <MenuItem  onClick={()=>handleCloseNavMenu(page.link)} key={page.label}
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.label}
                </MenuItem>
            ))}
            </Box>
            {isAuth?<UserMenu />:<AuthMenu/>}
        </Toolbar>
        </Container>
    </AppBar>
    );
    }
    export default Header2;