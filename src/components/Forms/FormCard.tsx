import React from 'react'

// UI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function FormCard(props : { label : string, description?: string, children: any }) {
    return (
        <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left', p: 6 }}>
            <Box>
                <Typography variant='h4' component='h3'>{props.label}</Typography>
                {props.description ? <Typography>{props.description}</Typography> : ''}
            </Box>
            {props.children}
        </Card>
    )
}