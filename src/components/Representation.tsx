import React from "react"

// Components
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"

// Utils
import { nanoid } from 'nanoid'
import Tooltip from "@mui/material/Tooltip";

interface RepresentationInterface {
    type: string;
    identity: string[];
    content: string[];
}

export default function Representation(props : { representation: RepresentationInterface[], handleClick: Function }) {

    // -------- Wasn't loving using different colored chips for each type of representation. Didn't look great but also could potentially be offensive. Probably going to leave as gray but leaving function here for now
    // function getBackgroundColor(type : string) {
    //     switch (type) {
    //         case 'Race / Culture':
    //             return '#00b894'
    //         case 'Nationality / Ethnicity / Tribal Affiliation':
    //             return '#00b894'
    //         case 'Gender / Sexuality':
    //             return '#0984e3'
    //         case 'Family Structure':
    //             return '#6c5ce7'
    //         case 'Neurodivergent':
    //             return '#fdcb6e'
    //         case 'Body':
    //             return '#e17055'
    //         case 'Disability':
    //             return '#e84393'
    //         default:
    //             return ''
    //     }
    // }
    
    const chips : any = []
    
    const representation = props.representation
        .filter(rep => rep.identity.length > 0)

    representation.forEach(
        rep => rep.identity.map(
            identity => chips.push(
                <Grid item key={nanoid()}>
                    <Tooltip title='Click me to search for more books like this.' arrow>
                        <Chip label={identity} onClick={() => props.handleClick(identity)} />
                    </Tooltip>
                </Grid>
            )
        )
    )

    return (
        <Grid container spacing={1} >
            {chips}
        </Grid>
    )
}