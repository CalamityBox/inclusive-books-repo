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

// Data
import booksList from "../../data/booksList"
import useChipsCustom from '../../utils/useChipsCustom'


export default function PaginatedBookResults(props : any) {
    
    const [searchText, setSearchText] = React.useState('')
    const [isSearchReadOnly,setIsSearchReadOnly] = React.useState(false)
    const [chips, setChips, handleChipClick, handleChipDelete, chipFilter] = useChipsCustom()
    const [page, setPage, handlePageChange, BOOKS_PER_PAGE] = usePaginationCustom(1, 10)
    const [results, setResults] = React.useState( booksList.map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> ) )

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value)
        if (page !== 1) {
            setPage(1) // Set search page to 1 whenever search text changes otherwise a completely new search might start on page 3, which is not obvious and confusing for the user
        }
    }

    function handleClear() {
        setSearchText('')
        setPage(1)
    }

    React.useEffect(() => {

        setPage(1)
        window.scrollTo(0, 0)

        if (chips.length > 0) {
            console.log('setting results based on chips')
            setResults(
                booksList
                    .filter( book => chipFilter(book) )
                    .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
            )
        } else {
            console.log('setting results based on search query: ',searchText)
            setResults( 
                matchSorter(booksList, searchText, { keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']})
                    .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
            )
        }

        setIsSearchReadOnly(chips.length > 0)

    },[chips])

    // Only run filter function when user has stopped typing ----------------
    React.useEffect(() => {

        const timer = setTimeout(() => {

            console.log('setting results based on search query: ',searchText)

            setResults( 
                matchSorter(booksList, searchText, { keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']})
                    .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
            )

        }, 200)

        return () => clearTimeout(timer)

    }, [searchText])
    
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >    

            <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >
                <Search value={searchText} handleChange={handleChange} handleClear={handleClear} isReadOnly={isSearchReadOnly} />
                <ChipGrid chips={chips} handleChipDelete={handleChipDelete} />
            </Container>

            <DisplayBookCards books={results} page={page} booksPerPage={BOOKS_PER_PAGE} handleChipClick={handleChipClick} />

            <Pagination 
                color='primary' 
                count={Math.ceil(results.length / BOOKS_PER_PAGE)}
                onChange={handlePageChange}
                page={page}
                sx={{ margin: 'auto' }}
            />

        </Container>
    )
}