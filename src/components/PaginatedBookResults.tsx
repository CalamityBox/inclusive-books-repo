import React from 'react'

// Components
import Autocomplete from '@mui/material/Autocomplete'
import Pagination from '@mui/material/Pagination'
import Container from '@mui/system/Container'
import TextField from '@mui/material/TextField'

// Utils
import { matchSorter } from 'match-sorter'

// Data
import booksList from '../data/booksList'

export default function PaginatedBookResults() {
    
    const [searchText, setSearchText] = React.useState('')

    const options = [... new Set( booksList.map(book => `${book.title}${book.subtitle ? ': ' + book.subtitle : ''}`) )]
    const filterOptions = (options : string[], { inputValue } : any) => matchSorter(options, inputValue)


    function handleChange(event: React.SyntheticEvent, value: string, reason: string) {
        setSearchText(value)
    }

    return (
        <Container>

            <Autocomplete
                options={
                    options // Massive hack to fix bug with duplicate values in autocomplete. Revisit data/booksList 
                }
                onInputChange={handleChange}
                renderInput={(params) => <TextField {...params} label="Book" />}
                filterOptions={filterOptions}
            />


            <Pagination count={10} color='primary' />

        </Container>
    )
}