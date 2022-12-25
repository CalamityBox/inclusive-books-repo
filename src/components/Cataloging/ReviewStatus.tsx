import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import CircleIcon from '@mui/icons-material/Circle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
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
                        status[index] = <CheckCircleIcon fontSize={props.size} color='success' key={nanoid()} />
                        break
                    case 'questionable':
                        status[index] = <CancelIcon fontSize={props.size} color='error' key={nanoid()} />
                    case 'neutral':
                        status[index] = <RemoveCircleIcon fontSize={props.size} color='warning' key={nanoid()} />
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