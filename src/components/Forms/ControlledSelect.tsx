import React from 'react'

// UI Components
import MenuItem from '@mui/material/MenuItem'

// Hook Form
import { Controller } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { TextField } from '@mui/material'

export default function ControlledSelection(props : { label?: string, name: string, defaultValue?: string, options: { value: string, label: string }[], isDisabled?: boolean, control : any, isError?: boolean, errorMessage?: string }) {

    const selectOptions = props.options.map(
        option => <MenuItem key={nanoid()} value={option.label}>{option.label}</MenuItem>
    )

    const inputLabel = nanoid()

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={props.control}
            render={({field}) => (
                <TextField 
                    {...field}
                    select
                    fullWidth
                    defaultValue={props.defaultValue}
                    disabled={!!props.isDisabled}
                    label={props.label} 
                    variant='outlined' 
                    error={props.isError}
                    helperText={props.errorMessage}
                >
                    {selectOptions}
                </TextField>
            )}
        />
    )
}