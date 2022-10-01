import React from "react"

// Components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardHeader  from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import Contributors from "./Contributors"
import Representation from "./Representation"
import Awards from "./BookCardActions"

export default function BookCard(props: any) {
    return (
        <Card
            variant='outlined'
            sx={{
                maxHeight: '400px',
                display: 'flex',
                alignItems: 'flex-start'
            }}
        >
            <Box
                sx={{
                    width: '250px'
                }}
            >
                <CardMedia
                    component='img'
                    image={props.coverUrl[0]} // Default to first provided url. Come back to this to handle multiple editions, or to error check if first url doesn't load
                    alt={`The cover image of the book ${props.title}`}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    rowGap: 2,
                    padding: 3,
                    maxWidth: '60%'
                }}
            >
                <CardHeader
                    title={props.title}    
                    titleTypographyProps={{ variant: 'h4', component: 'h3', align: 'left' }}
                    subheader={props.subtitle}       
                    subheaderTypographyProps={{ variant: 'h6', component: 'h4', align: 'left' }}
                    sx={{ margin: '0', padding: '0', }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', rowGap: 0 }}>
                    <Contributors type='Author' contributors={props.authors} />
                    { props.illustrators.length > 0 && <Contributors type='Illustrator' contributors={props.illustrators} /> }
                </Box>

                <Representation representation={props.representation} handleClick={props.handleChipClick} activeChips={props.activeChips} />


            </Box>

            <Awards awards={props.awards} />

        </Card>
    )
}