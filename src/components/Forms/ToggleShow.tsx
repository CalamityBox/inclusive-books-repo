import React from 'react'

import IconButton from '@mui/material/IconButton'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Grid from '@mui/material/Grid'
import { Tooltip } from '@mui/material'

export default function ToggleShow(props : { children: any, isVisible: boolean, remove?: any }) {

    return (
        <>
            {
            props.isVisible ?
                <>
                    {props.children}
                    <Grid item lg={2}>
                        <Tooltip title='Remove' arrow>
                            <IconButton id='clear-button-2' size='large' onClick={props.remove}>
                                <HighlightOffIcon fontSize='inherit' />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </>

                :

                <></>
            }
        </>
    )
}