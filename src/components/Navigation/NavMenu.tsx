import React from 'react'

// Components
import NavMenuItem from './NavMenuItem'
import Box from '@mui/material/Box'

// Utils
import { MenuPath } from '../utils/menuPaths'
import { nanoid } from 'nanoid'

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
                    item => <NavMenuItem key={nanoid()} name={item.name} path={item.path} nestedPaths={item.nestedPaths} />
                )
            }  
        </Box>
    )
}