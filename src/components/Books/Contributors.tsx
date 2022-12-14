import React from "react"

// Components
import Typography from "@mui/material/Typography"

// Routing
import { Link } from 'react-router-dom'

// Utils
import { nanoid } from "nanoid"

export default function Contributors(props : any) {

    const contributors = props.contributors
        .map( 
            (contributor : { name: string, id: number }, index : number) => (
                <div key={nanoid()} style={{ display: 'inline' }}>
                    <Link to={`/books/authors-and-illustrators/${contributor.id}`}>
                        {contributor.name}
                    </Link>
                    { index === props.contributors.length - 2 ? // Formatting logic. I truly despise this but couldn't get if statements to work or figure out a textjoin. Come back to this ugly trash
                        ', and ' :
                        index < props.contributors.length - 1 && ', '
                    }
                </div>
            )
        )

    return (
        <Typography
            variant='body1'
            component='div'
        >
            {props.type}{contributors.length > 1 && 's'}: {contributors}
        </Typography>
    )
}