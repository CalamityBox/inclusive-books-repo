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

export default function Representation(props : any) {

    const activeChipIdentities : string[] = []

    if (props.hasOwnProperty('activeChips')) {
        props.activeChips.forEach((chip : any) => activeChipIdentities.push(chip.label))
    } else {
        props.filterOptions.forEach(
            (section : any) =>  {

                for (const option of section.options) {
                    
                    if (option.checked) {
                        activeChipIdentities.push(option.label)
                    }

                    for (const subOption of option.subOptions) {
                        if (subOption.checked) {
                            activeChipIdentities.push(subOption.label)
                        }
                    }
                    
                }

            }
        )
    }
    
    const chips : any = []
    
    const representation = props.representation
        .filter((rep : any) => rep.identities.length > 0 && rep.identities[0] !== "") // Bit of a hack; come back to this later

    representation.forEach(
        (rep : any) => rep.identities.map(
            (identity : any) => chips.push(
                <Grid item key={nanoid()}>
                    <Tooltip title={activeChipIdentities.includes(identity) ? 'Showing books with this identity.' : 'Click me to search for more books like this.'} arrow>
                        <Chip label={identity} onClick={() => props.handleClick(identity)} color={activeChipIdentities.includes(identity) ? 'primary' : 'default'} />
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