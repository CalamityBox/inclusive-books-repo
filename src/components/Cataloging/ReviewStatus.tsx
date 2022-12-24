import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import CircleIcon from '@mui/icons-material/Circle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import Box from '@mui/material/Box'
import { ICatalogingReview } from '../../utils/Interfaces'

export default function ReviewStatus(props: { size?: "small" | "inherit" | "medium" | "large" | undefined, reviews: ICatalogingReview[] }) {

    const status = props.reviews.map(
        review => {
            switch (review.recommendation) {
                case 'inclusive':
                    return <CheckCircleIcon fontSize={props.size} color='success' />
                case 'questionable':
                    return <CancelIcon fontSize={props.size} color='error' />
                case 'neutral':
                    return <RemoveCircleIcon fontSize={props.size} color='warning' />
            }
        }
    )

    // Books need 2-3 reviews, so add in blank spots for missing reviews
    if (props.reviews.length < 3) {
        for (let i = 1; i < 3 - props.reviews.length; i++) {
            status.push(<CircleIcon fontSize={props.size} color='action' />)
        }
    }

    return (
        <Box sx={{ border: 2, borderColor: '#b2bec3', borderRadius: 10, display: 'flex', columnGap: 0.5, justifyContent: 'center', p: 0.75, width: 'min-content' }}>
            {status}
        </Box>
    )
}