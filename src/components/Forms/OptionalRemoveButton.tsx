import React from 'react'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export default function OptionalRemoveButton(props: { isVisible: boolean, isDisabled?: boolean, remove: any, index: number }) {
    return (
        <>
            {
                props.isVisible ?
                    
                    <Tooltip title='Remove contributor'>
                        <IconButton size='large' onClick={props.remove} disabled={!!props?.isDisabled}>
                            <HighlightOffIcon fontSize='inherit' />
                        </IconButton>
                    </Tooltip>

                    :

                    <></>
            }
        </>
    )
}