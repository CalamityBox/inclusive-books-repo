import React from 'react'

import Button from '@mui/material/Button'
import { ICatalogingReview } from '../../utils/Interfaces'
import { useNavigate } from 'react-router-dom'

// Button that determines if the user can review or catalog a book
export default function ReviewButton(props: { bookKey: string, userId: string, reviews?: ICatalogingReview[] }) {

    const navigate = useNavigate()

    const [buttonText, setButtonText] = React.useState('Review')
    const [catalogingPath, setCatalogingPath] = React.useState('')

    React.useEffect(() => {
        if (!!props?.reviews) {
    
            let [inclusiveCount, neutralCount, questionableCount] = [0,0,0]
    
            for (const [key, review] of Object.entries(props.reviews)) {
                switch (review.recommendation) {
                    case 'inclusive':
                        inclusiveCount++
                        break
                    case 'neutral':
                        neutralCount++
                        break
                    case 'questionable':
                        questionableCount++
                        break
                }
            }
    
            const numReviews = inclusiveCount + neutralCount + questionableCount
    
            if (numReviews > 1) {
                if (inclusiveCount > neutralCount + questionableCount) {
                    setCatalogingPath('inclusive-cataloging')
                    setButtonText('Catalog')
                } else if (neutralCount > inclusiveCount + questionableCount) {
                    setCatalogingPath('neutral-cataloging')
                    setButtonText('Catalog')
                } else if (questionableCount > inclusiveCount + neutralCount) {
                    setCatalogingPath('questionable-cataloging')
                    setButtonText('Catalog')
                }
            }
    
        }
    },[props?.reviews])


    return (
        <Button 
            variant={buttonText === 'Review' ? 'outlined' : 'contained'}
            sx={{ width: '100%' }}
            onClick={() => navigate(buttonText === 'Review' ? `/cataloging/reviewing/${props.bookKey}/${props.userId}` : `/cataloging/${catalogingPath}/${props.bookKey}`)}
        >
            {buttonText}
        </Button>
    )
}