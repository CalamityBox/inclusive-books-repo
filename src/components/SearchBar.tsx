import React from 'react'

import { IconButton, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import TextField from '@mui/material/TextField'



export default function SearchBar(props : { label?: string, placeholder?: string, isDisabled?: boolean, defaultValue?: string, callbackFunction: Function }) {

    const [value, setValue] = React.useState(!!props.defaultValue ? props.defaultValue : '')

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setValue(event.target.value)
    }

    React.useEffect(() => {

        const timer = setTimeout(() => {
            props.callbackFunction(value)
        }, 200)
        
        return () => clearTimeout(timer)

    },[value])

    return (
        <TextField
            value={value}
            label={props.label}
            placeholder={props.placeholder}
            disabled={!!props.isDisabled}
            variant='outlined'
            size='medium'
            fullWidth
            sx={{ backgroundColor: 'white' }}

            onChange={(event) => handleChange(event)}

            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={() => setValue('')}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}