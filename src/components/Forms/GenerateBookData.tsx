import { Container } from '@mui/material'
import { matchSorter } from 'match-sorter'
import { nanoid } from 'nanoid'
import React from 'react'
import InclusiveCatalogingForm from '../../pages/Cataloging/InclusiveCatalogingForm'
import { convertGoogleBookToDefaultFormValues } from '../../utils/bookConversions'
import GoogleBooksCard from '../Books/GoogleBooksCard'
import SearchBar from '../SearchBar'

export default function GenerateBookData(props : any) {
    
    const [results, setResults] = React.useState<any>([])
    const [bookCards, setBookCards] = React.useState<any>([])
    const [selectedBook,setSelectedBook] = React.useState(undefined)

    function handleBookSelect(book : any) {
        setSelectedBook(book)
    }

    function handleGoogleBooksAPICall(search: string) {

        if (search.length > 0) {
            console.log('running callback function with search text:',search)
    
            const searchTerms = search
                .trim()
                .replace(/\s\s+/g,' ')
                .replace(' ','+')
    
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}:keyes&maxResults=40&key=AIzaSyC7TxgJBb7dFEPpLS_mxoM0Wk33WtGYuCQ`)
                .then(response => response.json())
                .then(result => {
                    setResults( 
                        matchSorter(result.items, search, { keys: [(book : any) => book.volumeInfo.title + (!!book.volumeInfo?.subtitle ? ' ' + book.volumeInfo.subtitle : '')]}) // Google's sorting on the returned object from the API call isn't great, so this both improves the sorting and filters irrelevant results
                    )
                })
        } else {
            setResults([])
        }

    }

    React.useEffect(() => {
        setBookCards(
            results.map(
                (book : any) => <GoogleBooksCard key={nanoid()} {...book} setSelectedBook={setSelectedBook} />
            )
        )
    },[results])

    return (
        <>
            {
                selectedBook === undefined ?
                    <>
                        <SearchBar placeholder='Search for a book by title' callbackFunction={handleGoogleBooksAPICall} />
                        <Container maxWidth={false} sx={{ maxWidth: '700px', mt: 2 }}>
                            {bookCards.length === 0 ? <></> : bookCards}
                        </Container>
                    </>
                    :
                    <InclusiveCatalogingForm defaultValues={convertGoogleBookToDefaultFormValues(selectedBook)} />
            }
        </>
    )
}