import react from 'react'

// Components
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Contributors from './Contributors'
import Representation from './Representation'

// Routing
import { Link } from 'react-router-dom'

export default function BookCardInfo(props : any) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                rowGap: 2
            }}
        >

            <Link to={`/books/${props.title}`} state={{ fiddleSticks: 'test data' }}>
                <CardHeader
                    title={props.title}    
                    titleTypographyProps={{ variant: 'h4', component: 'h3', align: 'left' }}
                    subheader={props.subtitle}       
                    subheaderTypographyProps={{ variant: 'h6', component: 'h4', align: 'left' }}
                    sx={{ margin: '0', padding: '0', }}
                />
            </Link>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: 0 }}>
                <Contributors type='Author' contributors={props.authors} />
                { props.illustrators.length > 0 && <Contributors type='Illustrator' contributors={props.illustrators} /> }
            </Box>

            <Representation representation={props.representation} handleClick={props.handleChipClick} activeChips={props.activeChips} />

            {props.description.length > 0 && <Typography align='left' variant='body1' >{props.description}</Typography>}  

        </Box>
    )
}