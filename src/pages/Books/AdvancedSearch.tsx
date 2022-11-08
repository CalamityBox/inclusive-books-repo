import React from 'react'

// Components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import FilterGroup from '../../components/Filtering/FilterGroup'
import { Container } from '@mui/system'
import BookCard from '../../components/Books/BookCard'
import booksList from '../../data/booksList'
import DisplayBookCards from '../../components/Books/DisplayBookCards'
import { BookInterface } from '../../utils/Interfaces'
import Pagination from '@mui/material/Pagination'

// Utils
import usePaginationCustom from '../../utils/usePaginationCustom'
import { nanoid } from 'nanoid'
import useFilterOptions from '../../utils/useFilterOptions'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import { Filter } from '@mui/icons-material'
import useDatabase from '../../utils/useDatabase'
import useChipsCustom from '../../utils/useChipsCustom'

export default function AdvancedSearch() {

    const [filterOptions, setFilterOptions, handleCheckboxChange, filterBooks, isAnyBoxChecked] = useFilterOptions()
    const [chips, setChips, handleChipClick, handleChipDelete, chipFilter] = useChipsCustom()

    const [searchResults, setSearchResults] = React.useState([])
    const [data, isLoading] = useDatabase()

    // Pagination
    const [page, setPage, handlePageChange, BOOKS_PER_PAGE] = usePaginationCustom(1, 10)

    const formSections = filterOptions.map(
        (section : any) => <FilterGroup key={nanoid()} {...section} handleChange={handleCheckboxChange} />
    )

    React.useEffect(() => {

        if ( isAnyBoxChecked(filterOptions) ) {

            console.log('running filters')

            setSearchResults(
                data.filter((book : any) => filterBooks(book))
                    .map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
            )
        }
        // } else {

        //     setSearchResults( data.map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )

        // }

    },[filterOptions])

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', rowGap: 3}} maxWidth='xl'>
            
            <Typography variant='h4' component='h1' color='primary' marginBottom={2}>
                Advanced Search
            </Typography>

            <Container disableGutters={true} maxWidth='xl' sx={{ display: 'flex'}}>

                <Card variant='outlined' sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                    <form>
                        {formSections}
                    </form>
                </Card>

                <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }} >
                    <DisplayBookCards books={searchResults} page={page} booksPerPage={BOOKS_PER_PAGE} handleChipClick={handleChipClick} />
                </Container>

            </Container>

            <Pagination 
                color='primary' 
                count={Math.ceil(searchResults.length / BOOKS_PER_PAGE)}
                onChange={handlePageChange}
                page={page}
                sx={{ margin: 'auto' }}
            />

        </Container>
    )
}