import React from 'react'

// Components
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

// Icons
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'

// Utils


export default function Search(props : { value: string, handleChange: Function, handleClear: Function }) {

    return (
        <TextField
            placeholder='Search for a book by title, author, illustrator, or isbn'
            variant='outlined'
            fullWidth
            size='medium'

            value={props.value}
            onChange={(event) => props.handleChange(event)}

            InputProps={{
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