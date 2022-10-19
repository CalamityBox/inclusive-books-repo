import react from 'react'

// Components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FilterCheckBox from './FilterCheckBox'

// Utils
import { nanoid } from 'nanoid'

export default function FilterGroup(props : any) {

    const options = props.options.map(
        (option : any) => <FilterCheckBox key={nanoid()} {...option} handleChange={props.handleChange} isIndeterminate={props.checkIsIndeterminate(option)} />
    )

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 3 }}>

            <Typography variant='h6' component='h3'>{props.name}</Typography>

            <FormGroup>
                {options}
            </FormGroup>

        </Box>
    )
}