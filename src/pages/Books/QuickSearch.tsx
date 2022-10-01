import React from 'react'

// Components
import Container from '@mui/system/Container'
import Typography from '@mui/material/Typography'
import PaginatedBookResults from '../../components/PaginatedBookResults'

// Data

export default function QuickSearch() {

    return (
        <Container>
            
            <Typography variant='h4' component='h1' color='primary'>
                Quick Search Component
            </Typography>

            <PaginatedBookResults />

        </Container>
    )
}