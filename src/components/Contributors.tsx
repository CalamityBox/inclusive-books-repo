import React from "react"

// Components
import Typography from "@mui/material/Typography"

// Routing
import { Link } from 'react-router-dom'

export default function Contributors(props : { type: 'Author' | 'Illustrator', contributors: string[] }) {

    const contributors = props.contributors
        .map( 
            (name : string, index : number) => (
                <>
                    <Link to={`/books/authors-and-illustrators/${name}`}>
                        {name}
                    </Link>
                    { index === props.contributors.length - 2 ? // Formatting logic. I truly despise this but couldn't get if statements to work or figure out a textjoin. Come back to this ugly trash
                        ', and ' :
                        index < props.contributors.length - 1 && ', '
                    }
                </>
            )
        )

    return (
        <>
            <Typography>
                {props.type}{contributors.length > 1 && 's'}: {contributors}
            </Typography>
        </>
    )
}