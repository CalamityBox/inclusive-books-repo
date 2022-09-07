import React from 'react'

// Components
import Container from '@mui/system/Container'
import Typography from '@mui/material/Typography'

// Data
import PaginatedBookResults from '../../components/PaginatedBookResults'

export default function QuickSearch() {

    return (
        <Container>
            <Typography variant='h4' component='h1' color='primary'>
                Quick Search Component
            </Typography>

            <Typography variant='subtitle1' component='p'>
                Start typing the title of a book to view books in the collection.
            </Typography>

            <PaginatedBookResults />

        </Container>
    )
}