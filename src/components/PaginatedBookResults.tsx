import React from 'react'

// Components
import Autocomplete from '@mui/material/Autocomplete'
import Pagination from '@mui/material/Pagination'
import Container from '@mui/system/Container'
import TextField from '@mui/material/TextField'
import BookCard from './BookCard'

// Utils
import { matchSorter } from 'match-sorter'
import { nanoid } from 'nanoid'

// Data
import booksList from '../data/booksList'
import { Chip, Grid } from '@mui/material'


export default function PaginatedBookResults() {
    
    // Handle chip filters
    const [chips, setChips] = React.useState([
        { key: 0, label: 'Black / African' },
        { key: 1, label: 'Lesbian' },
        { key: 2, label: 'Wheelchair' }
    ])

    function handleChipClick( chipToAdd : string ) : void {
        
        console.log(chipToAdd)

        setChips(
            prevChips => {

                if ( prevChips.filter(chip => chip.label === chipToAdd).length === 0 ) {
                    return [...prevChips,{ key: prevChips.length, label: chipToAdd }]
                } else {
                    return prevChips
                }

            }
        )

    }

    function handleChipDelete(chipToDelete: { key: number, label: string }) : void {

        setChips(
            prevChips => prevChips.filter(chip => chip.label !== chipToDelete.label)
        )

    }

    function filterResults(book : any): boolean {

        console.log('book: ',book)

        // if there are no filters active, return true because every book is allowed
        if (chips.length === 0) {
            console.log('no filters active, returning true')
            return true
        }
        
        // Unpack representation array of objects into one array that lists all representation identities as strings
        const representation : string[] = []

        book.representation.forEach(
            (rep : any) => {
                console.log('rep.identity is: ',rep.identity)
                representation.push(...rep.identity)
            }
        )

        console.log('generated representation array is: ',representation)

        // Loop through every chip filter to see if the book's representation includes that identity
        for (let [index, chip] of chips.entries()) {
            if ( !representation.includes(chip.label) ) {
                console.log(representation,' does not include ',chip.label,'returning false')
                return false
            }
        }

        console.log('returning true')
        return true

    }

    // Get and handle search results
    const [searchText, setSearchText] = React.useState('')

    const options = [... new Set( booksList.map(book => `${book.title}${book.subtitle ? ': ' + book.subtitle : ''}`) )] // Massive hack to fix bug with duplicate values in autocomplete. Revisit data/booksList 
    const filterOptions = (options : string[], { inputValue } : any) => matchSorter(options, inputValue)

    function handleChange(event: React.SyntheticEvent, value: string, reason: string) {
        setSearchText(value)
        setPage(1) // Set search page to 1 whenever search text changes otherwise a completely new search might start on page 3, which is not obvious and confusing for the user
    }

    const results = matchSorter(booksList, searchText, {keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']})
        .filter( element => filterResults(element) )
        .map(book => <BookCard key={nanoid()} handleClick={handleChipClick} {...book} />)

    
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

            <Grid container spacing={1} justifyContent='center'>
                {chips.map(
                    chip => (
                        <Grid item key={chip.key}>
                            <Chip 
                                label={chip.label}
                                onDelete={() => handleChipDelete(chip)} 
                                color='primary' 
                            />
                        </Grid>
                    )
                )}
            </Grid>

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

                <Pagination 
                    color='primary' 
                    count={Math.ceil(results.length / BOOKS_PER_PAGE)}
                    onChange={handlePageChange}
                    page={page}
                    sx={{ margin: 'auto' }}
                />

            </Container>


        </Container>
    )
}