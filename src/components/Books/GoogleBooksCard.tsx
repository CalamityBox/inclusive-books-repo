import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { shortenString } from '../../utils/handleStrings'

export default function GoogleBookCard(props : any) {

    const [borderColor, setBorderColor] = React.useState('default')

    const imageSrc = `https://books.google.com/books/publisher/content/images/frontcover/${props.id}?fife=w400-h600&source=gbs_api`

    return (
        <Card variant='outlined' sx={{ display: 'flex', mb: 2, cursor: 'pointer', borderColor: borderColor }} onClick={() => props.selectBook({...props})} onMouseEnter={() => setBorderColor('#6c5ce7')} onMouseLeave={() => setBorderColor('default')}>
            <CardMedia
                component="img"
                image={imageSrc}
                alt={`The book cover of ${props.volumeInfo.title}`}
                sx={{ width: '150px' }}
            />
            <Box sx={{ textAlign: 'left', p: 2 }}>
                <Typography variant='h5'>{shortenString(props.volumeInfo.title, 40)}</Typography>
                {!!props.volumeInfo.subtitle ? <Typography variant='subtitle1' sx={{ mb: 2 }}>{props.volumeInfo.subtitle}</Typography> : <></>}
                
                <Typography variant='body1' sx={{ mb: 1 }}>{!!props.volumeInfo.authors ? props.volumeInfo.authors.join(', ') : ''}</Typography>
                <Typography variant='body2'>{shortenString(props.volumeInfo.description,200)}</Typography>
            </Box>
        </Card>
    )

}