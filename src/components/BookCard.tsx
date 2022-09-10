import React from "react"

// Components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardHeader  from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import Contributors from "./Contributors"

export default function BookCard(props: any) {
    return (
        <Card
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
                    image={props.coverUrl}
                    alt={`The cover image of the book ${props.title}`}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    rowGap: 1,
                    ml: 3,
                    mt: 3
                }}
            >
                <CardHeader
                    title={props.title}    
                    titleTypographyProps={{ variant: 'h4', component: 'h3', align: 'left' }}
                    subheader={props.subtitle}       
                    subheaderTypographyProps={{ variant: 'h6', component: 'h4', align: 'left' }}
                    sx={{ margin: '0', padding: '0', }}
                />

                <Contributors type='Author' contributors={props.authors} />
                { props.illustrators.length > 0 && <Contributors type='Illustrator' contributors={props.illustrators} /> } 
            </Box>


        </Card>
    )
}