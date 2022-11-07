import React from "react"

// Components
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import BookCardInfo from "./BookCardInfo"

export default function BookCard(props: any) {

    console.log('props are: ',props)

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
                    image={props.editions[0].coverURL} // Default to first provided url. Come back to this to handle multiple editions, or to error check if first url doesn't load
                    alt={`The cover image of the book ${props.info.fullTitle}`}
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
                {/* <Awards awards={props.awards} /> */}
            </Box>


        </Card>
    )
}