import React from "react"

// Components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardHeader  from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import Contributors from "./Contributors"
import Representation from "./Representation"
import Awards from "./BookCardActions"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import BookCardInfo from "./BookCardInfo"

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
                    minWidth: '250px',
                    maxWidth: '250px'
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
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%',
                    paddingRight: 1,
                    paddingLeft: 3,
                    paddingY: 2
                }}
            >
                <BookCardInfo {...props} />
                <Awards awards={props.awards} />
            </Box>


        </Card>
    )
}