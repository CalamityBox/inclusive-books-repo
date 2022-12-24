import React from 'react'

// Table
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { BookInterface, IFormInputs } from '../../utils/Interfaces'
import { shortenString } from '../../utils/handleStrings'
import useDatabase from '../../utils/useDatabase'
import ReviewStatus from './ReviewStatus'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Dialog, DialogTitle } from '@mui/material'
import GenerateBookData from '../Forms/GenerateBookData'

export default function BooksToReview() {

    // Dialog
    const [open, setOpen] = React.useState(false)

    const [books, isLoading] = useDatabase('booksToReview')

    console.log('books',books)

    function createRows(books: IFormInputs[]) {
        return books.map(
            book => (
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align='right'>{book.title}</TableCell>
                    <TableCell align='right'>{book?.contributors[0]?.contributor?.name}</TableCell>
                    <TableCell align='right'>{shortenString(book.description, 25)}</TableCell>
                    <TableCell align='right'><ReviewStatus size='large' reviews={book.cataloging} /></TableCell>
                    <TableCell><Button variant='outlined'>Add Review</Button></TableCell>
                </TableRow>
            )
        )
    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
            <TableContainer component={Paper}>
                <Table aria-label='Table of books that need additional reviews.'>

                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Cover</TableCell>
                            <TableCell>Book Title</TableCell>
                            <TableCell align='center'>Author</TableCell>
                            <TableCell align='center'>Description</TableCell>
                            <TableCell align='center'>Review Status</TableCell>
                            <TableCell align='center'>Add Review</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            !!books ?
                                createRows(books)
                                :
                                <></>
                        }
                    </TableBody>

                </Table>
            </TableContainer>

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
                <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: 3, p: 5 }}>
                    <DialogTitle id='add-book-dialog-title' align='center'>Select a Book to Review</DialogTitle>
                    <GenerateBookData />
                </Container>  
            </Dialog>

        </Container>
    )

}