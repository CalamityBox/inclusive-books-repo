import React from 'react'
import NavMenuItem from './NavMenuItem'
import Box from '@mui/material/Box'

// Utils
import { MenuPath } from '../utils/menuPaths'

export default function NavMenu(props : { menuPaths: MenuPath[] }) {
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            {
                props.menuPaths.map(
                    item => <NavMenuItem name={item.name} path={item.path} nestedPaths={item.nestedPaths} />
                )
            }  
        </Box>
    )
}