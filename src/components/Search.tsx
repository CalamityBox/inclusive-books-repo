import React from 'react'

// Components
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// Icons
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'

// Utils


export default function Search(props : { value: string, handleChange: Function, handleClear: Function, isReadOnly: boolean}) {

    const placeholderText = props.isReadOnly ? 'Searching is restricted while filters are active' : 'Search for a book by title, author, illustrator, or isbn'
    const backgroundColor = props.isReadOnly ? '#dfe6e9' : 'white'

    return (
        <TextField
            placeholder={placeholderText}
            variant='outlined'
            fullWidth
            size='medium'

            value={props.value}
            onChange={(event) => props.handleChange(event)}

            sx={{ backgroundColor: backgroundColor }}

            InputProps={{
                disabled: props.isReadOnly,
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={() => props.handleClear()}>
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}