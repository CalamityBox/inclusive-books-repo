import react from 'react'

// Components
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

// Utils
import { nanoid } from 'nanoid'

export default function FilterCheckBox(props : any) {

    function handleClick(event : any) {
        console.log(event.target)
    }

    // Handles checkbox suboptions
    const children = props.subOptions
        .map( (option : any) => (
            <FormControlLabel
                key={nanoid()}
                label={option.label}
                value={option.label}
                checked={option.checked}
                control={
                    <Checkbox onChange={(event) => props.handleChange(event.target.value)} />
                }
            />
        ))

    return (
        <>

            <FormControlLabel
                label={props.label}
                value={props.label}
                control={
                    <Checkbox
                        checked={props.checked}
                        indeterminate={props.indeterminate}
                        onChange={(event) => props.handleChange(event.target.value)}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {children}
            </Box>

        </>
    )
}