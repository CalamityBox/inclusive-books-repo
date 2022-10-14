import React from 'react'

// Components
import Container from '@mui/system/Container'
import Typography from '@mui/material/Typography'
import PaginatedBookResults from '../../components/Books/PaginatedBookResults'

// Data

export default function QuickSearch() {

    return (
        <Container>
            
            <Typography variant='h4' component='h1' color='primary' marginBottom={2}>
                Quick Search
            </Typography>

            <PaginatedBookResults />

        </Container>
    )
}