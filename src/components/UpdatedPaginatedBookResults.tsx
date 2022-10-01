import React from 'react'

// Components
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import DisplayBookCards from "./DisplayBookCards"
import Search from "./Search"

// Utils
import { matchSorter } from "match-sorter"

// Data
import booksList from "../data/booksList"
import ChipGrid from "./ChipGrid"


export default function UpdatedPaginatedBookResults(props : any) {
    
    const [searchText, setSearchText] = React.useState('')
    const [results, setResults] = React.useState(booksList)

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

    // Handle pagination ----------------
    const BOOKS_PER_PAGE = 10

    const [page, setPage] = React.useState(1)

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setPage(value)
        window.scrollTo(0, 0)
    }

    // Handle chip filters ----------------
    const [chips, setChips] = React.useState< { key: number, label: string }[] | [] >([])

    function handleChipClick( chipToAdd : string ) : void {

        setSearchText('') // Might change this back. Think it makes the most sense to clear search text when you click on a new filter here

        setChips(
            prevChips => {

                if (prevChips.length === 0) {
                    return [{ key: prevChips.length, label: chipToAdd }]
                } else if ( prevChips.filter(chip => chip.label === chipToAdd).length === 0 ) {
                    return [...prevChips,{ key: prevChips.length, label: chipToAdd }]
                } else {
                    return prevChips
                }

            }
        )

        setPage(1)
        window.scrollTo(0, 0)

    }

    function handleChipDelete(chipToDelete: { key: number, label: string }) : void {
        setChips( prevChips => prevChips.filter(chip => chip.label !== chipToDelete.label) )
        setPage(1)
    }

    // Only run filter function when user has stopped typing ----------------
    React.useEffect(() => {

        const timer = setTimeout(() => {
            console.log('running effect')

            setResults( matchSorter(booksList, searchText, { keys: ['title', 'subtitle', 'authors', 'illustrators', 'isbn']}) )
        }, 400)

        return () => clearTimeout(timer)

    }, [searchText])
    
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >    

            <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }} >
                <Search value={searchText} handleChange={handleChange} handleClear={handleClear} />
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