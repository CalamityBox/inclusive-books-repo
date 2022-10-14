import React from 'react'

// Components
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavMenu from './NavMenu'

// Utils
import { MenuPath } from '../../utils/menuPaths'


export default function Nav(props : { menuPaths: MenuPath[] }) {
    return (
        <AppBar
            position='fixed'
            className='nav-bar'
        >
            <Toolbar            >

                <div>Navbar Component</div>
                <div>
                    <NavMenu menuPaths={props.menuPaths} />
                </div>

            </Toolbar>
        </AppBar>
    )
}