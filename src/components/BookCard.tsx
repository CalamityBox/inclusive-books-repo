import React from "react"

// Components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import { CardHeader, Typography } from "@mui/material"

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

            <CardHeader
                title={
                    <Typography variant='h4' component='h3'>{props.title}</Typography>
                }            
            />

        </Card>
    )
}