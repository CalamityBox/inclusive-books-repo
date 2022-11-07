import React from 'react'

// Components
import Card from '@mui/material/Card'

// Data
import booksList from '../../data/booksList'

// Utils
import { BookInterface } from '../../utils/Interfaces'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'

// Routing
import { useParams } from 'react-router-dom'

export default function Book() {

    const { id } = useParams()

    function findBook(id : any) {
        for (const book of booksList) {
            if (book.title === id) {
                return book
            }
        }
    }

    // const book = findBook(id)

    return (
        <Card variant='outlined'>
            <Box
                sx={{
                    width: '250px'
                }}
            >
                {/* <CardMedia
                    component='img'
                    image={book.editions[0].coverUrl[0]} // Default to first provided url. Come back to this to handle multiple editions, or to error check if first url doesn't load
                    alt={`The cover image of the book ${book.info.fullTitle}`}
                /> */}
            </Box>
        </Card>
    )
}