import React from 'react'

// UI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function FormCard(props : { label : string, description?: string, children: any, required?: boolean }) {

    return (
        <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', p: 5, borderRadius: 3 }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h5' component='h3' fontWeight={500}>
                    {props.label}
                    {!!props.required ? <span style={{ color: 'red' }}> *</span> : ''}
                </Typography>
                {props.description ? <Typography>{props.description}</Typography> : ''}
            </Box>
            {props.children}
        </Card>
    )
}