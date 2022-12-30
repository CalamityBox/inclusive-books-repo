import React from 'react'

import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// Tooltip with most common pattern for this site
export default function EnhancedDefaultTooltip(props: { children: any, arrow?: boolean, title: string, body: string, placement?: "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"}) {
    return (
        <Tooltip
            arrow={props?.arrow === undefined ? true : props.arrow} // Default to true if undefined
            placement={props?.placement === undefined ? 'right' : props.placement}
            title={
                <Box sx={{ p: 1 }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>{props.title} says...</Typography>
                    <Typography variant='body1'>{props.body}</Typography>
                </Box>
            }
        >
            {props.children}
        </Tooltip>
    )
}