import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, Dialog, DialogContentText, DialogTitle, IconButton, TablePagination, Typography, Container } from '@mui/material'
import { deleteFromDatabase } from '../utils/useDatabase'

export default function DeleteDialog(props: { databasePath: string, completionMessage?: string }) {

    const [isOpen, setIsOpen] = React.useState(false)
    const [isCompleted, setIsCompleted] = React.useState(false)

    function handleDelete() {
        setIsOpen(false)
        deleteFromDatabase(props.databasePath)
    }

    return (
        <>
            <IconButton onClick={() => setIsOpen(true)}>
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby='delete-book-dialog-title'
                aria-describedby='add-book-dialog-description'
            >
                <Container sx={{ p: 3 }}>
                    <DialogTitle id='delete-book-dialog-title' align='center'>Are you sure you want to delete this book?</DialogTitle>
                    <DialogContentText id='delete-book-dialog-description' align='center' sx={{ mt: -2, mb: 4 }}>
                        This will delete this book from the reviewing dashboard. You can always add it again later, but any existing reviews for this book cannot be recovered.
                    </DialogContentText>
                    <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: 3 }}>
                        <Button variant='outlined' onClick={() => setIsOpen(false)}>Keep Book</Button>
                        <Button variant='contained' color='error' onClick={handleDelete}>Delete Book</Button>
                    </Box>
                </Container>
            </Dialog>
        </>
    )

}