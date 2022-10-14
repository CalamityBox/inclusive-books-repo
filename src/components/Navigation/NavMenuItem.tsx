import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuPath } from '../utils/menuPaths';

// Routing
import { Link } from 'react-router-dom'

// Utils
import { nanoid } from 'nanoid';

export default function NavMenuItem(props : { name: string, path: string, nestedPaths: MenuPath[] | undefined }) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>

        <Button
            id="basic-button"
            variant='text'
            sx={{color: 'white', fontWeight: 500}}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {props.name}
        </Button>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {
                props.nestedPaths.map(
                    item => (
                      <Link key={nanoid()} to={`${props.path}/${item.path}`}>
                        <MenuItem onClick={handleClose}>{item.name}</MenuItem>
                      </Link>
                    )
                )
            }
        </Menu>
        
    </div>
  )
}