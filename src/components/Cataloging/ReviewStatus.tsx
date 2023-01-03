import React from 'react'

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral'
import CircleIcon from '@mui/icons-material/Circle'
import Box from '@mui/material/Box'
import { ICatalogingReview } from '../../utils/Interfaces'
import { nanoid } from 'nanoid'
import EnhancedDefaultTooltip from '../EnhancedDefaultTooltip'

export default function ReviewStatus(props: { size?: "small" | "inherit" | "medium" | "large" | undefined, reviews?: ICatalogingReview[] }) {

    function parseName(name: string) {
        // Returns first name + last initial
        const names = name.split(' ')
        return `${names[0]} ${names[1][0]}.`
    }

    let status = []

    for (let i = 0; i < 3; i++) {
        status.push(<CircleIcon fontSize={props.size} color='action' key={nanoid()} />)
    }

    if (!!props?.reviews) {

        let index = 0 // Need this to know where the status icon should go

        for (const [key, review] of Object.entries(props.reviews)) {

            // console.log(`${index} recommendation for this book is`,review.recommendation)

            switch (review.recommendation) {

                case 'inclusive':
                    status[index] = (
                        <EnhancedDefaultTooltip key={nanoid()} placement='bottom' title={parseName(review.reviewer.name)} body={review.review}>
                            <div tabIndex={0}>
                                <SentimentSatisfiedAltIcon fontSize={props.size} color='success' />
                            </div>
                        </EnhancedDefaultTooltip>
                    )
                    break

                case 'questionable':
                    status[index] = (
                        <EnhancedDefaultTooltip key={nanoid()} placement='bottom' title={parseName(review.reviewer.name)} body={review.review}>
                            <div tabIndex={0}>
                                <SentimentVeryDissatisfiedIcon fontSize={props.size} color='error' />
                            </div>
                        </EnhancedDefaultTooltip>
                    )
                    break

                case 'neutral':
                    status[index] = (
                        <EnhancedDefaultTooltip key={nanoid()} placement='bottom' title={parseName(review.reviewer.name)} body={review.review}>
                            <div tabIndex={0}>
                                <SentimentNeutralIcon fontSize={props.size} color='warning' key={nanoid()} />
                            </div>
                        </EnhancedDefaultTooltip>
                    )
                    break
            }

            index += 1

        }

    }


    return (
        <Box sx={{ display: 'flex', columnGap: 0.5, justifyContent: 'center', p: 0.75, width: 'min-content', m: 'auto' }}>
            {status}
        </Box>
    )
}