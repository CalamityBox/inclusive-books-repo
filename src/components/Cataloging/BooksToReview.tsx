import React from 'react'

// Table
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { IGoogleBook } from '../../utils/Interfaces'
import { shortenString } from '../../utils/handleStrings'
import { pushDatabase, readDatabaseRealtime } from '../../utils/useDatabase'
import ReviewStatus from './ReviewStatus'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Box, Dialog, DialogContentText, DialogTitle, TablePagination, Typography } from '@mui/material'
import GoogleBooksSearch from '../Forms/GoogleBooksSearch'
import { convertGoogleBookToDefaultFormValues, unpackBooksObject } from '../../utils/bookConversions'
import { nanoid } from 'nanoid'

export default function BooksToReview() {

    // Dialog
    const [open, setOpen] = React.useState(false)

    // Pagination
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    function handlePageChange(event: unknown, newPage: number) {
        setPage(newPage)
    }

    function handleRowsPerPageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRowsPerPage( parseInt(event.target.value,10) )
        setPage(0)
    }

    const [books, setBooks] = readDatabaseRealtime('booksToReview')

    function createRows(books: any) {

        const sliceStart = page * rowsPerPage
        const sliceEnd = sliceStart + rowsPerPage

        return books
            .reverse()
            .slice(sliceStart, sliceEnd)
            .map(
                (book: any) => (
                    <TableRow key={nanoid()}>
                        <TableCell><img src={book.editions[0].coverUrl} style={{ width: 65, height: 65, objectFit: 'cover' }} /></TableCell>
                        <TableCell align='left'>{book.title}</TableCell>
                        <TableCell align='left'>{book?.contributors[0]?.contributor?.name}</TableCell>
                        <TableCell align='left'>{shortenString(book.description, 45)}</TableCell>
                        <TableCell align='center'><ReviewStatus size='medium' reviews={book.cataloging} /></TableCell>
                        <TableCell align='center'><Button variant='outlined'>Add Review</Button></TableCell>
                    </TableRow>
                )
            )
    }

    function selectBook(book: IGoogleBook) {
        pushDatabase('booksToReview',convertGoogleBookToDefaultFormValues(book))
    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
            <TableContainer component={Paper}>
                <Typography 
                    sx={{ flex: '1 1 100%', my: 3, ml: 3, textAlign: 'left' }}
                    variant="h4"
                    id="table-title"
                    component="div"
                >
                    Books to Review
                </Typography>
                <Table aria-label='Table of books that need additional reviews.'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Cover</TableCell>
                            <TableCell align='left'>Book Title</TableCell>
                            <TableCell align='left'>Author</TableCell>
                            <TableCell align='left'>Description</TableCell>
                            <TableCell align='center'>Review Status</TableCell>
                            <TableCell align='center'>Add Review</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            !!books ?
                                createRows( unpackBooksObject(books) )
                                :
                                <></>
                        }
                    </TableBody>

                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={Object.keys(books).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />

            <Button 
                variant='contained'
                onClick={() => setOpen(true)}
                sx={{ width: 'max-content', mx: 'auto' }}
            >
                Add New Book
            </Button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth='lg'
                aria-labelledby='add-book-dialog-title'
                aria-describedby='add-book-dialog-description'
            >
                <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: 4, p: 5 }}>
                    <Box>
                        <DialogTitle id='add-book-dialog-title' align='center'>Select a Book to Review</DialogTitle>
                        <DialogContentText id='add-book-dialog-description' align='center' sx={{ mt: -2 }}>
                            Search and select a book from the Google Books Library to pre-load its information during cataloging.
                        </DialogContentText>
                    </Box>
                    <GoogleBooksSearch 
                        selectBook={(book: IGoogleBook) => {
                            selectBook(book)
                            setOpen(false)
                        }} 
                    />
                    <Button variant='outlined' sx={{ width: 'max-content', mx: 'auto' }}>Not finding your book?</Button>
                </Container>  
            </Dialog>

        </Container>
    )

}