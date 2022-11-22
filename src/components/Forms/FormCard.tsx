import React from 'react'

// UI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function FormCard(props : { label : string, description?: string, children: any }) {

    const [variant, setVariant] = React.useState<"outlined" | "elevation" | undefined>('outlined')

    return (
        <Card variant={variant} sx={{ display: 'flex', flexDirection: 'column', rowGap: 2, textAlign: 'left', p: 5, borderRadius: 3 }} onMouseEnter={() => setVariant('elevation')} onMouseLeave={() => setVariant('outlined')}>
            <Box>
                <Typography variant='h4' component='h3'>{props.label}</Typography>
                {props.description ? <Typography>{props.description}</Typography> : ''}
            </Box>
            {props.children}
        </Card>
    )
}