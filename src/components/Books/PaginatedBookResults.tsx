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
                setResults(
                    booksList
                        .filter( book => chipFilter(book) )
                        .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
                )
            } else {
                setResults( 
                    matchSorter(booksList, searchText, { keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']})
                        .map( book => <BookCard key={nanoid()} {...book} handleChipClick={handleChipClick} activeChips={chips} /> )
                )
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