import React from 'react'

import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useParams } from 'react-router-dom'
import ReviewForm from '../../components/Forms/ReviewForm'
import { UserAuth } from '../../contexts/AuthContext'
import { readDatabase, submitReview, writeDatabase } from '../../utils/useDatabase'

import { useNavigate } from 'react-router-dom'
import FormWrapper from '../../components/FormComponents/FormWrapper'
import { ReviewFormDefaultValues, ReviewFormSchema } from '../../utils/formSchemas'

export default function BookReviewPage() {
    
    const navigate = useNavigate()
    
    const { bookId, userId } = useParams()
    
    const { user } = UserAuth()
    
    function handleSubmit(data: any) {
        
        data.reviewer = {
            name: user.displayName,
            id: user.uid
        }
        !!bookId ? submitReview(bookId, user.uid, data) : console.log('id undefined')
    }

    function handleBlur(data: any) {
        !!bookId ? submitReview(bookId, user.uid, data) : console.log('id undefined')
    }
    
    const [defaultValues, isLoading] = readDatabase(`booksToReview/${bookId}/cataloging/${userId}`)

    return (
        <>
            {
                isLoading ?
                    <Box sx={{ display: 'flex', mt: '50vh' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <FormWrapper 
                        defaultValues={!!defaultValues ? defaultValues : ReviewFormDefaultValues} 
                        schema={ReviewFormSchema} 
                        formSubmitHandler={handleSubmit} 
                        handleBlur={handleBlur} 
                        canEdit={user.uid === userId}
                        postSubmitButtonText='Back to Cataloging'
                        handlePostSubmit={() => navigate('/cataloging/dashboard')}
                    >
                        <ReviewForm />
                    </FormWrapper>
            }
        </>
    )
}