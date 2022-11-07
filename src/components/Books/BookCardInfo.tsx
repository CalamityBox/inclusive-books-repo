import React from 'react'

// Components
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Contributors from './Contributors'
import Representation from './Representation'

// Routing
import { Link } from 'react-router-dom'
import TruncatedDescription from './TruncatedDescription'

export default function BookCardInfo(props : any) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                rowGap: 2,
                textAlign: 'left'
            }}
        >

            <Link to={`/books/${props.metadata.id}`}>
                <CardHeader
                    title={props.info.title}    
                    titleTypographyProps={{ variant: 'h4', component: 'h3', align: 'left' }}
                    subheader={props.info.subtitle}       
                    subheaderTypographyProps={{ variant: 'h6', component: 'h4', align: 'left' }}
                    sx={{ margin: '0', padding: '0', }}
                />
            </Link>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: 0 }}>
                <Contributors type='Author' contributors={props.contributors.authors} />
                { props.contributors.illustrators.length > 0 && props.contributors.illustrators[0] !== "" && <Contributors type='Illustrator' contributors={props.contributors.illustrators} /> }
            </Box>

            <Representation representation={props.representation} handleClick={props.handleChipClick} activeChips={props.activeChips} />

            {props.info.description.length > 0 && <TruncatedDescription description={props.info.description} />}  

        </Box>
    )
}