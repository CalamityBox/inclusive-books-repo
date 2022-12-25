import React from 'react'

// Components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import FilterGroup from '../../components/Filtering/FilterGroup'
import { Container } from '@mui/system'
import BookCard from '../../components/Books/BookCard'
import DisplayBookCards from '../../components/Books/DisplayBookCards'
import Pagination from '@mui/material/Pagination'

// Utils
import usePaginationCustom from '../../utils/usePaginationCustom'
import { nanoid } from 'nanoid'
import useFilterOptions from '../../utils/useFilterOptions'
import { readDatabase } from '../../utils/useDatabase'
import useChipsCustom from '../../utils/useChipsCustom'

export default function AdvancedSearch() {

    const [filterOptions, setFilterOptions, handleCheckboxChange, filterBooks, isAnyBoxChecked] = useFilterOptions()
    const [chips, setChips, handleChipClick, handleChipDelete, chipFilter] = useChipsCustom()

    const [searchResults, setSearchResults] = React.useState([])
    const [data, isLoading] = readDatabase('inclusiveBooks')

    // Pagination
    const [page, setPage, handlePageChange, BOOKS_PER_PAGE] = usePaginationCustom(1, 10)

    const formSections = filterOptions.map(
        (section : any) => <FilterGroup key={nanoid()} {...section} handleChange={handleCheckboxChange} />
    )

    function updateChipsWithFilterOptions() {

        const newChips : any = []

        for (const section of filterOptions) {
            if (section.type === 'representation') {
                for (const option of section.options) {

                    if (option.checked) {
                        newChips.push({ key: nanoid(), label: option.label })
                    }

                    for (const subOption of option.subOptions) {
                        if (subOption.checked) {
                            newChips.push({ key: nanoid(), label: subOption.label })
                        }
                    }

                }
            }
        }

        return newChips

    }

    React.useEffect(() => {

        if ( isAnyBoxChecked(filterOptions) ) {

            console.log('running filters')

            setSearchResults(
                data.filter((book : any) => filterBooks(book))
                    .map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} filterOptions={filterOptions} /> )
            )
        }
        // } else {

        //     setSearchResults( data.map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )

        // }
        


    },[filterOptions])

    console.log('chips is: ',chips)

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