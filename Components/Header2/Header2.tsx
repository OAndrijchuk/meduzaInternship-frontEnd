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
import Link from 'next/link';
import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setUserData, setUserToken } from '@/redux/users/usersSlice';


const pages = [
    { label: 'About', link: '/about' },
    { label: 'Users', link: '/users' },
    { label: 'Companies', link: '/companies' }
];

function Header2() {
    const dispatch = useDispatch();
    const session = useSession();
    
    useEffect(() => {
        if (session.data?.token) {
            dispatch(setUserData(session.data?.user));
            dispatch(setUserToken(session.data?.token));
        } else {
            dispatch(setUserData({}));
            dispatch(setUserToken(''));
        }

    }, [session, dispatch]);
    console.log(session);
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
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
            <Link href={page.link} style={{textDecoration:'none'}} key={page.label}>
                <MenuItem  onClick={handleCloseNavMenu} >
                    <Typography textAlign="center" sx={{fontWeight:"600",color:"#1976d2"}}>{page.label}</Typography>
                    </MenuItem>
                </Link>
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
            <Link
                key={page.label}
                href={page.link}
                onClick={handleCloseNavMenu}
            >
                <MenuItem 
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.label}
                </MenuItem>
            </Link>
            ))}
            </Box>
            {session?.data?<UserMenu />:<AuthMenu/>}
        </Toolbar>
        </Container>
    </AppBar>
    );
    }
    export default Header2;