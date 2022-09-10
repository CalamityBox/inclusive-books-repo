import React from 'react'

// Components
import Autocomplete from '@mui/material/Autocomplete'
import Pagination from '@mui/material/Pagination'
import Container from '@mui/system/Container'
import TextField from '@mui/material/TextField'
import BookCard from './BookCard'

// Utils
import { matchSorter } from 'match-sorter'

// Data
import booksList from '../data/booksList'


export default function PaginatedBookResults() {
    
    // Get and handle search results
    const [searchText, setSearchText] = React.useState('')

    const options = [... new Set( booksList.map(book => `${book.title}${book.subtitle ? ': ' + book.subtitle : ''}`) )] // Massive hack to fix bug with duplicate values in autocomplete. Revisit data/booksList 
    const filterOptions = (options : string[], { inputValue } : any) => matchSorter(options, inputValue)

    function handleChange(event: React.SyntheticEvent, value: string, reason: string) {
        setSearchText(value)
        setPage(1) // Set search page to 1 whenever search text changes otherwise a completely new search might start on page 3, which is not obvious and confusing for the user
    }

    const results = matchSorter(booksList, searchText, {keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']})
        .map(book => <BookCard {...book} />)

    
    // Handle pagination
    const BOOKS_PER_PAGE = 10

    const [page, setPage] = React.useState(1)

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setPage(value)
    }


    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                rowGap: '30px'
            }}
        >

            <Autocomplete
                clearOnBlur={false}
                options={options}
                onInputChange={handleChange}
                renderInput={(params) => <TextField {...params} label="Book" />}
                filterOptions={filterOptions}
            />

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '30px'
                }}
            >
                {
                results.length > BOOKS_PER_PAGE ?
                    results.slice((page - 1) * BOOKS_PER_PAGE, (page - 1) * BOOKS_PER_PAGE + BOOKS_PER_PAGE) : 
                    results
                }
            </Container>

            <Pagination 
                color='primary' 
                count={Math.ceil(results.length / BOOKS_PER_PAGE)}
                onChange={handlePageChange}
                page={page}
                sx={{
                    margin: 'auto'
                }}
            />

        </Container>
    )
}