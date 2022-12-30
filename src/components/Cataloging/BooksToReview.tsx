import React from 'react'

import { useNavigate } from 'react-router-dom'

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
import { deleteFromDatabase, pushDatabase, readDatabaseRealtime } from '../../utils/useDatabase'
import ReviewStatus from './ReviewStatus'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Box, Dialog, DialogContentText, DialogTitle, IconButton, TablePagination, Typography } from '@mui/material'
import GoogleBooksSearch from '../Forms/GoogleBooksSearch'
import { convertGoogleBookToDefaultFormValues } from '../../utils/bookConversions'
import { nanoid } from 'nanoid'
import { UserAuth } from '../../contexts/AuthContext'
import useTablePagination from '../../utils/useTablePagination'

import DeleteIcon from '@mui/icons-material/Delete'

export default function BooksToReview() {

    // User
    const { user } = UserAuth()

    // Navigation
    const navigate = useNavigate()

    // Dialog
    const [open, setOpen] = React.useState(false)

    // Pagination
    const DEFAULT_PAGE = 0
    const DEFAULT_ROWS_PER_PAGE = 5
    const [page, rowsPerPage, setPage, setRowsPerPage, handlePageChange, handleRowsPerPageChange] = useTablePagination(DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE)

    const [books, setBooks] = readDatabaseRealtime('booksToReview')

    function generateRows(books: object) {

        const output = []

        for (const [key, book] of Object.entries(books)) {
            output.push(
                <TableRow key={nanoid()} hover>
                    <TableCell><img src={book.editions[0].coverUrl} style={{ width: 65, height: 65, objectFit: 'cover' }} /></TableCell>
                    <TableCell align='left'>{book.title}</TableCell>
                    <TableCell align='left'>{book?.contributors[0]?.contributor?.name}</TableCell>
                    <TableCell align='left'>{shortenString(book.description, 35)}</TableCell>
                    <TableCell align='center'><ReviewStatus size='large' reviews={book.cataloging} /></TableCell>
                    <TableCell align='center'>
                        <Button variant='outlined' disabled={!!book.cataloging && book.cataloging.length >= 3} onClick={() => navigate(`/cataloging/reviewing/${key}/${user.uid}`)}>
                            Review
                        </Button>
                    </TableCell>
                    <TableCell align='center'>
                        <IconButton onClick={() => deleteFromDatabase(`booksToReview/${key}`)}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            )
        }

        const sliceStart = page * rowsPerPage
        const sliceEnd = sliceStart + rowsPerPage

        return output.reverse().slice(sliceStart, sliceEnd)

    }

    function selectBook(book: IGoogleBook) {
        pushDatabase('booksToReview',convertGoogleBookToDefaultFormValues(book))
        setPage(0)
    }

    

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
            <TableContainer component={Paper} sx={{ maxHeight: '70vh' }}>
                <Typography 
                    sx={{ flex: '1 1 100%', my: 3, ml: 3, textAlign: 'left' }}
                    variant="h4"
                    id="table-title"
                    component="div"
                >
                    Books to Review
                </Typography>
                <Table stickyHeader aria-label='Table of books that need additional reviews.'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Cover</TableCell>
                            <TableCell align='left'>Book Title</TableCell>
                            <TableCell align='left'>Author</TableCell>
                            <TableCell align='left'>Description</TableCell>
                            <TableCell align='center'>Review Status</TableCell>
                            <TableCell align='center'></TableCell>
                            <TableCell align='center'></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            !!books ?
                                generateRows(books)
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