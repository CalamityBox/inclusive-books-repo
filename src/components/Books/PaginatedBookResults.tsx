import React from 'react'

// Components
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import DisplayBookCards from "./DisplayBookCards"
import Search from "../Search"
import ChipGrid from "./ChipGrid"
import BookCard from './BookCard'

// Utils
import { matchSorter } from "match-sorter"
import { nanoid } from 'nanoid'
import usePaginationCustom from '../../utils/usePaginationCustom'
import useDatabase from '../../utils/useDatabase'

// Data
import useChipsCustom from '../../utils/useChipsCustom'
import { Typography } from '@mui/material'


export default function PaginatedBookResults(props : any) {

    const [data, isLoading] = useDatabase('inclusiveBooks')

    const [searchText, setSearchText] = React.useState('')
    const [isSearchReadOnly,setIsSearchReadOnly] = React.useState(false)
    const [chips, setChips, handleChipClick, handleChipDelete, chipFilter] = useChipsCustom()
    const [page, setPage, handlePageChange, BOOKS_PER_PAGE] = usePaginationCustom(1, 10)
    const [searchResults, setSearchResults] = React.useState<any>([])
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
    }

    function handleClear() {
        setSearchText('')
    }

    React.useEffect(() => {

        const hasChips = chips.length > 0

        setIsSearchReadOnly(hasChips)
        setPage(1)

        const timer = setTimeout(() => {

            if (hasChips) {

                const results = data.filter( (book : any) => chipFilter(book, chips) )

                setSearchResults(
                    results.map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
                )

            } else if (searchText.length > 0) {

                const results = matchSorter(data, searchText, { keys: ['*.info.fullTitle','*.contributors.list','*.info.isbnList']})

                setSearchResults( 
                    results.map( (book : any) => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
                )

            } else {
                setSearchResults([])
            }
        
        }, 200)
        
        return () => clearTimeout(timer)

    },[searchText, chips])


    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >    

            <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >
                <Search value={searchText} handleChange={handleChange} handleClear={handleClear} isReadOnly={isSearchReadOnly} />
                <ChipGrid chips={chips} handleChipDelete={handleChipDelete} />
            </Container>

            {
                (searchResults.length === 0) ?
                <Typography>No results.</Typography> :
                <DisplayBookCards books={searchResults} page={page} booksPerPage={BOOKS_PER_PAGE} handleChipClick={handleChipClick} />
            }

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