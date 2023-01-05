import React from 'react'

// Components
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

// Utils
import { MenuPath } from '../../utils/menuPaths'
import { Avatar, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../contexts/AuthContext'
import UserMenu from './UserMenu'


export default function Nav(props : { menuPaths: MenuPath[] }) {

    const {googleSignInWithPopup, user} = UserAuth()

    const activeStyle = { color: '#6c5ce7', textDecoration: 'underline', textUnderlineOffset: '10px', textDecorationThickness: '2px' }
    const inactiveStyle = { color: 'black' }

    console.log('User:',user)

    return (
        <AppBar
            position='fixed'
            className='nav-bar'
            sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: 'solid 1px #b2bec3', px: 2 }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', columnGap: 5 }}>

                <Typography variant='h6' color='primary'>
                    SMART Reading Book Search
                </Typography>

                <NavLink to='/' style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
                    Home
                </NavLink>

                <NavLink to='/books/quick-search' style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
                    Quick Search
                </NavLink>
                
                <NavLink to='/books/advanced-search' style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
                    Advanced Search
                </NavLink>
                
                {
                    user?.displayName && <NavLink to='/cataloging/dashboard' style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Cataloging</NavLink>
                }
                
                
                {
                    (user?.displayName) ? 
                    
                        <UserMenu user={user} /> : 
                    
                        <Button variant='outlined' sx={{ marginLeft: 'auto' }} onClick={googleSignInWithPopup}>
                            Sign In
                        </Button>
                }

            </Toolbar>
        </AppBar>
    )
}