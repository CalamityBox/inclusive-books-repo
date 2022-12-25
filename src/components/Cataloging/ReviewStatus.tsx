import React from 'react'

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import CircleIcon from '@mui/icons-material/Circle'
import Box from '@mui/material/Box'
import { ICatalogingReview } from '../../utils/Interfaces'
import { nanoid } from 'nanoid'

export default function ReviewStatus(props: { size?: "small" | "inherit" | "medium" | "large" | undefined, reviews?: ICatalogingReview[] }) {

    let status = []

    for (let i = 0; i < 3; i++) {
        status.push(<CircleIcon fontSize={props.size} color='action' key={nanoid()} />)
    }

    if (!!props?.reviews) {
        props.reviews.forEach(
            (review, index) => {
                switch (review.recommendation) {
                    case 'inclusive':
                        status[index] = <SentimentSatisfiedAltIcon fontSize={props.size} color='success' key={nanoid()} />
                        break
                    case 'questionable':
                        status[index] = <SentimentVeryDissatisfiedIcon fontSize={props.size} color='error' key={nanoid()} />
                        break
                    case 'neutral':
                        status[index] = <SentimentNeutralIcon fontSize={props.size} color='warning' key={nanoid()} />
                        break
                }
            }
        )
    }


    return (
        <Box sx={{ display: 'flex', columnGap: 0.5, justifyContent: 'center', p: 0.75, width: 'min-content', m: 'auto' }}>
            {status}
        </Box>
    )
}