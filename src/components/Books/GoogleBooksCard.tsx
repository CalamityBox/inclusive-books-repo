import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function GoogleBookCard(props : any) {

    console.log('props are',props)

    const imageSrc = `https://books.google.com/books/publisher/content/images/frontcover/${props.id}?fife=w400-h600&source=gbs_api`

    function createEllipsedText(string: string, maxLength: number) {
        if (string === undefined) {
            return ''
        }

        if (string.length <= maxLength) {
            return string
        }
        return string.slice(0,maxLength-3).concat('...')
    }

    return (
        <Card variant='outlined' sx={{ display: 'flex', mb: 2, cursor: 'pointer' }} onClick={() => props.setSelectedBook({...props})}>
            <CardMedia
                component="img"
                image={imageSrc}
                alt={`The book cover of ${props.volumeInfo.title}`}
                sx={{ width: '150px' }}
            />
            <Box sx={{ textAlign: 'left', p: 2 }}>
                <Typography variant='h5'>{createEllipsedText(props.volumeInfo.title, 40)}</Typography>
                {!!props.volumeInfo.subtitle ? <Typography variant='subtitle1' sx={{ mb: 2 }}>{props.volumeInfo.subtitle}</Typography> : <></>}
                
                <Typography variant='body1' sx={{ mb: 1 }}>{!!props.volumeInfo.authors ? props.volumeInfo.authors.join(', ') : ''}</Typography>
                <Typography variant='body2'>{createEllipsedText(props.volumeInfo.description,200)}</Typography>
            </Box>
        </Card>
    )

}