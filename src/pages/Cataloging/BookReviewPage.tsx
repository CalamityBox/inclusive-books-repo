import React from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from '../../components/Forms/ReviewForm'
import { UserAuth } from '../../contexts/AuthContext'
import { submitReview } from '../../utils/useDatabase'

export default function BookReviewPage() {

    const { id } = useParams()
    console.log('book id is:',id)

    const { user } = UserAuth()

    return (
        <>
            Book Review Page
            <ReviewForm 
                handleSubmit={(data: any) => {
                    data.reviewer = {
                        name: user.displayName,
                        id: user.uid
                    }
                    console.log('submitting data',data)
                    !!id ? submitReview(id, data) : console.log('id undefined')
                }} 
            />
        </>
    )
}