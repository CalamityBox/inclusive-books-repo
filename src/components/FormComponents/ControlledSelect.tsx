import React from 'react'

// UI Components
import MenuItem from '@mui/material/MenuItem'

// Hook Form
import { Controller, useFormContext } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { TextField } from '@mui/material'

export default function ControlledSelection(props : { label?: string, name: string, defaultValue?: string, options: { value: string, label: string }[], isDisabled?: boolean, isError?: boolean, errorMessage?: string }) {

    const { control } = useFormContext()

    const selectOptions = props.options.map(
        option => <MenuItem key={nanoid()} value={option.label}>{option.label}</MenuItem>
    )

    const inputLabel = nanoid()

    return (
        <Controller 
            name={props.name}
            defaultValue={props.defaultValue}
            control={control}
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
                    helperText={props.isError? props.errorMessage : ''}
                >
                    {selectOptions}
                </TextField>
            )}
        />
    )
}