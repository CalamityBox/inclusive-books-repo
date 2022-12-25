import React from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from '../../components/Forms/ReviewForm'
import { submitReview } from '../../utils/useDatabase'

export default function BookReviewPage() {

    const { id } = useParams()
    console.log('book id is:',id)

    return (
        <>
            Book Review Page
            <ReviewForm 
                handleSubmit={(data: any) => {
                    console.log('submitting data',data)
                    !!id ? submitReview(id, data) : console.log('id undefined')
                }} 
            />
        </>
    )
}