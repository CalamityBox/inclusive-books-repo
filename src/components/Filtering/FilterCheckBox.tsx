import react from 'react'

// Components
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

// Utils
import { nanoid } from 'nanoid'

export default function FilterCheckBox(props : any) {

    console.log('passed down props are: ',props)

    // Handles checkbox suboptions
    const children = props.subOptions
        .map( (option : any) => (
            <FormControlLabel
                key={nanoid()}
                label={option.label}
                value={option.label}
                checked={option.checked}
                control={
                    <Checkbox onChange={props.handleChange} />
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
                        indeterminate={false}
                        onChange={props.handleChange}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {children}
            </Box>

        </>
    )
}