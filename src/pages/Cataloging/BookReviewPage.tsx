import React from 'react'

import { Box, Button, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import ReviewForm from '../../components/Forms/ReviewForm'
import { UserAuth } from '../../contexts/AuthContext'
import { readDatabase, submitReview } from '../../utils/useDatabase'

import { useNavigate } from 'react-router-dom'

export default function BookReviewPage() {

    
    const navigate = useNavigate()
    
    const { bookId } = useParams()
    // console.log('book id is:',bookId)
    
    const { user } = UserAuth()
    
    // Handle submit status and function
    const [submitted, setSubmitted] = React.useState(false)
    
    function handleSubmit(data: any) {
        
        setSubmitted(true)
        
        data.reviewer = {
            name: user.displayName,
            id: user.uid
        }
        // console.log('submitting data',data)
        !!bookId ? submitReview(bookId, user.uid, data) : console.log('id undefined')
    }
    
    const [defaultValues, isLoading] = readDatabase(`booksToReview/${bookId}/cataloging/${user.uid}`)

    return (
        <>
            {
                submitted ?
                    <>
                        <Typography variant='h4' sx={{ mt: '30vh', mb: 2 }}>Thank you for your response!</Typography>
                        <Button variant='contained' onClick={() => navigate('/cataloging/dashboard')}>Back to Cataloging</Button>
                    </>
                    :
                    isLoading ?
                        <Box sx={{ display: 'flex', mt: '50vh' }}>
                            <CircularProgress />
                        </Box>
                        :
                        <ReviewForm 
                            handleSubmit={handleSubmit}
                            defaultValues={!!defaultValues ? defaultValues : undefined}
                        />
            }
        </>
    )
}