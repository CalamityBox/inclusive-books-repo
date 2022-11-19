import React from 'react'

// UI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import ControlledTextField from './ControlledTextField'

export default function ContributorInput(props : any) {
    return (
        <Box>
            <ControlledTextField label='Name'  />
        </Box>
    )
}