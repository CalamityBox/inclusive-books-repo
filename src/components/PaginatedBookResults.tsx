import React, { SyntheticEvent } from 'react'

// Components
import Autocomplete from '@mui/material/Autocomplete'
import Pagination from '@mui/material/Pagination'
import Container from '@mui/system/Container'
import TextField from '@mui/material/TextField'

// Data
import booksList from '../data/booksList'

export default function PaginatedBookResults() {

    const [searchText, setSearchText] = React.useState('')

    function handleChange(event: React.SyntheticEvent, value: string, reason: string) {
        setSearchText(value)
    }

    console.log('search text: ' + searchText)

    return (
        <Container>

            <Autocomplete
                options={
                    [... new Set( booksList.map(book => `${book.title}${book.subtitle ? ': ' + book.subtitle : ''}`) )] // Massive hack to fix bug with duplicate values in autocomplete. Revisit data/booksList 
                }
                onInputChange={handleChange}
                renderInput={(params) => <TextField {...params} label="Book" />}
            />


            <Pagination count={10} color='primary' />

        </Container>
    )
}