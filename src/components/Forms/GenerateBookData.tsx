import { Container } from '@mui/material'
import React from 'react'
import InclusiveCatalogingForm from '../../pages/Cataloging/InclusiveCatalogingForm'
import { convertGoogleBookToDefaultFormValues } from '../../utils/bookConversions'
import GoogleBooksCard from '../Books/GoogleBooksCard'

export default function GenerateBookData(props : any) {

    const searchTerms = [
        'felix','ever','after'
    ]

    const searchText = searchTerms.join('+')
    
    const [results, setResults] = React.useState<any>([])
    const [bookCards, setBookCards] = React.useState<any>([])

    const [selectedBook,setSelectedBook] = React.useState(undefined)

    function handleBookSelect(book : any) {
        setSelectedBook(book)
    }

    React.useEffect(() => {
        if (!!selectedBook) {
            console.log('selected book is',selectedBook)
            console.log('extracted default values are',convertGoogleBookToDefaultFormValues(selectedBook))
        }
    },selectedBook)

    React.useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}:keyes&maxResults=40&key=AIzaSyC7TxgJBb7dFEPpLS_mxoM0Wk33WtGYuCQ`)
            .then(response => response.json())
            .then(result => {
                setResults( result.items )
            })
    },[])

    React.useEffect(() => {
        setBookCards(
            results.map(
                (book : any) => <GoogleBooksCard {...book} setSelectedBook={setSelectedBook} />
            )
        )
    },[results])

    // console.log('API results',results)
    // console.log(bookCards)
    // console.log('selected book is',selectedBook === undefined ? 'undefined' : selectedBook)


    return (
        <>
            {
                selectedBook === undefined ?
                    <Container maxWidth={false} sx={{ maxWidth: '700px' }}>
                        {bookCards.length === 0 ? <>Still Loading...</> : bookCards}
                    </Container>
                    :
                    <InclusiveCatalogingForm defaultValues={convertGoogleBookToDefaultFormValues(selectedBook)} />
            }
        </>
    )
}