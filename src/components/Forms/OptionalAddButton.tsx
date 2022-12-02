import React from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import AddCircleIcon from '@mui/icons-material/AddCircle'

export default function OptionalAddButton(props: { handleClick: any, isVisible?: boolean, isError: boolean, errorTooltip: string, defaultTooltip: string, alignment?: string }) {

    let alignmentStyle : any = undefined

    switch (props?.alignment) {
        case undefined:
            alignmentStyle = { margin: 'auto' }
            break
        case 'center':
            alignmentStyle = { margin: 'auto' }
            break
        case 'left':
            alignmentStyle = { mr: 'auto' }
            break
        case 'right':
            alignmentStyle = { ml: 'auto' }
            break
    }

    return (
        <>
            {
                !!props?.isVisible ?

                <Tooltip title={props.isError ? props.errorTooltip : props.defaultTooltip} arrow>
                    <Box sx={alignmentStyle}>
                        <IconButton 
                            aria-label="add contributor" 
                            size='large' 
                            color='primary' 
                            disabled={props.isError}
                            onClick={props.handleClick} 
                        >
                            <AddCircleIcon fontSize='inherit' />
                        </IconButton>
                    </Box>
                </Tooltip>

                :

                <></>
            }
        </>
    )
}