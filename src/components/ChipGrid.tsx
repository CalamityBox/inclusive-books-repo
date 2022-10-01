import React from 'react'

// Components
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

export default function ChipGrid(props : any) {
    return (
        <Grid container spacing={1} justifyContent='center'>
            {props.chips.map(
                (chip : any) => (
                    <Grid item key={chip.key}>
                        <Chip 
                            label={chip.label}
                            onDelete={() => props.handleChipDelete(chip)} 
                            color='primary' 
                        />
                    </Grid>
                )
            )}
        </Grid>
    )
}